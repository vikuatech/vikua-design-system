#!/usr/bin/env bash
# Instala o actualiza el Sistema de Diseno Vikua como Agent Skill de Claude Code.
#
#   ./scripts/install-skill.sh                # en el proyecto actual
#   ./scripts/install-skill.sh --scope user   # para todos tus proyectos
#   ./scripts/install-skill.sh --ref v1.0.0   # fijado a una version
set -euo pipefail

SKILL_NAME="vikua-design"
SCOPE="project"
REF="main"
REPO="git@github.com:vikuatech/vikua-design-system.git"

while [ $# -gt 0 ]; do
  case "$1" in
    --scope) SCOPE="$2"; shift 2 ;;
    --ref)   REF="$2";   shift 2 ;;
    --repo)  REPO="$2";  shift 2 ;;
    *) echo "Opcion desconocida: $1" >&2; exit 2 ;;
  esac
done

if [ "$SCOPE" = "user" ]; then
  BASE="$HOME/.claude/skills"
else
  BASE="$PWD/.claude/skills"
fi
TARGET="$BASE/$SKILL_NAME"

mkdir -p "$BASE"

if [ -d "$TARGET/.git" ]; then
  echo "Actualizando $TARGET a $REF"
  git -C "$TARGET" fetch --tags origin
  git -C "$TARGET" checkout "$REF"
  git -C "$TARGET" pull --ff-only
elif [ -e "$TARGET" ]; then
  echo "$TARGET existe y no es un clon de git. Muevelo o borralo antes de instalar." >&2
  exit 1
else
  echo "Clonando $REPO en $TARGET ($REF)"
  git clone --depth 1 --branch "$REF" "$REPO" "$TARGET"
fi

[ -f "$TARGET/SKILL.md" ] || { echo "No se encontro SKILL.md en $TARGET." >&2; exit 1; }

echo
echo "Listo. Reinicia Claude Code e invoca la skill con /$SKILL_NAME"
