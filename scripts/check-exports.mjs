/**
 * Verifica la integridad del paquete antes de publicar un tag.
 * No necesita dependencias: `npm run check`.
 *
 *  1. Cada export de index.js apunta a un .jsx que existe y tiene su .d.ts.
 *  2. Los @import de styles.css resuelven.
 *  3. Los url() de tokens/*.css apuntan a archivos que existen.
 *  4. Las rutas de "files" de package.json existen.
 *  5. Ningun componente usa hex crudo fuera de la lista permitida.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const read = (p) => readFileSync(resolve(root, p), "utf8");
const fail = (msg) => errors.push(msg);

/* 1 — barrel */
const index = read("index.js");
const exported = [...index.matchAll(/export \{ (\w+) \} from "\.\/(.+?)";/g)];
for (const [, name, path] of exported) {
  if (!existsSync(resolve(root, path))) fail(`index.js exporta ${name} desde ${path}, que no existe`);
  const types = path.replace(/\.jsx$/, ".d.ts");
  if (!existsSync(resolve(root, types))) fail(`falta el tipo ${types} de ${name}`);
}
const onDisk = [];
for (const dir of readdirSync(resolve(root, "components"), { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  for (const f of readdirSync(resolve(root, "components", dir.name))) {
    if (f.endsWith(".jsx")) onDisk.push(`components/${dir.name}/${f}`);
  }
}
const exportedPaths = new Set(exported.map(([, , p]) => p));
for (const p of onDisk) if (!exportedPaths.has(p)) fail(`${p} existe pero index.js no lo exporta`);

/* 2 — styles.css */
for (const [, imported] of read("styles.css").matchAll(/@import url\("(.+?)"\)/g)) {
  if (!existsSync(resolve(root, imported))) fail(`styles.css importa ${imported}, que no existe`);
}

/* 3 — url() de los tokens */
for (const f of readdirSync(resolve(root, "tokens"))) {
  for (const [, url] of read(`tokens/${f}`).matchAll(/url\("(.+?)"\)/g)) {
    if (/^(https?:)?\/\//.test(url) || url.startsWith("data:")) continue;
    const target = resolve(root, "tokens", url);
    if (!existsSync(target)) fail(`tokens/${f} apunta a ${url}, que no existe`);
  }
}

/* 4 — files de package.json */
const pkg = JSON.parse(read("package.json"));
for (const entry of pkg.files ?? []) {
  if (!existsSync(resolve(root, entry))) fail(`package.json "files" lista ${entry}, que no existe`);
}
for (const [subpath, target] of Object.entries(pkg.exports ?? {})) {
  const t = typeof target === "string" ? target : target.default;
  if (!t || t.includes("*")) continue;
  if (!existsSync(resolve(root, t))) fail(`exports["${subpath}"] apunta a ${t}, que no existe`);
}

/* 5 — hex crudo en componentes: solo se permite el blanco y el negro puros */
const allowedHex = new Set(["#FFFFFF", "#FFF", "#000000", "#000"]);
for (const p of onDisk) {
  for (const [, hex] of read(p).matchAll(/(?<!&)(#[0-9a-fA-F]{3,8})\b/g)) {
    if (!allowedHex.has(hex.toUpperCase())) warnings.push(`${p}: hex crudo ${hex} — usa un token var(--vk-*)`);
  }
}

const label = relative(process.cwd(), root) || ".";
console.log(`Sistema de Diseno Vikua · check de integridad (${label})`);
console.log(`  componentes exportados: ${exported.length} / ${onDisk.length} en disco`);
for (const w of warnings) console.log(`  aviso   ${w}`);
for (const e of errors) console.error(`  ERROR   ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} error(es).`);
  process.exit(1);
}
console.log(warnings.length ? `\nOK con ${warnings.length} aviso(s).` : "\nOK.");
