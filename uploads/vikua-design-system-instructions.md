# Vikua Design System — Improvement Instructions

This document turns the existing "Vikua Design System" page into a real,
reusable design system. Use it as a working brief: paste relevant sections
into Claude Design when building out each piece, so the values stay
consistent instead of being re-guessed from the manual each time.

---

## 1. Lock the Design Tokens

Confirm and finalize these values against your original brand manual (the
hex codes below are inferred from the exported artifact and should be
double-checked against source files):

### Color tokens

| Token name        | Hex value | Suggested use                          |
|--------------------|-----------|-----------------------------------------|
| `color-navy-900`   | `#001332` | Primary background, dark surfaces       |
| `color-blue-500`   | `#0D91D3` | Primary brand color, links, primary CTA |
| `color-olive-500`  | `#B1C427` | Accent, highlights, secondary CTA       |
| `color-orange-500` | `#E86D1A` | Sparingly-used accent / alert / warning |
| `color-white`      | `#FFFFFF` | Text on dark backgrounds, light surfaces|

Action items:
- [ ] Verify each hex against the source brand manual (not the rendered screenshot)
- [ ] Define at least a 3-step tint/shade ramp per color (e.g. `blue-100`, `blue-500`, `blue-900`) for hover/disabled/pressed states
- [ ] Define semantic aliases separate from raw colors (e.g. `color-text-primary`, `color-surface-dark`, `color-border-subtle`) that point to the ramp above — components should reference semantic names, never raw hex

### Typography tokens

- [ ] Identify heading and body font families used in the manual
- [ ] Define a type scale (minimum):

| Style   | Size | Line-height | Weight |
|---------|------|-------------|--------|
| H1      | ?    | ?           | ?      |
| H2      | ?    | ?           | ?      |
| H3      | ?    | ?           | ?      |
| Body    | ?    | ?           | ?      |
| Caption | ?    | ?           | ?      |

*(Fill in from the manual — these weren't extractable from the bundled artifact.)*

### Spacing & radius tokens

- [ ] Define a spacing scale (e.g. 4/8/12/16/24/32/48/64px)
- [ ] Define border-radius tokens (e.g. `radius-sm`, `radius-md`, `radius-full` for pills/badges)
- [ ] Define shadow/elevation tokens if the manual uses depth/cards

---

## 2. Component Inventory

List and spec each component before rebuilding. For every component, define:
**default / hover / active / disabled** states, and which color tokens each
state uses.

- [ ] Logo lockup — minimum size, clear space, and approved backgrounds (navy vs. white)
- [ ] Buttons — primary, secondary, ghost/text
- [ ] Navigation bar
- [ ] Cards
- [ ] Form inputs (text field, select, checkbox/radio)
- [ ] Badges / tags
- [ ] Icons — confirm icon style (line vs. filled) and stroke weight

---

## 3. Rebuild as a Living Style Guide

Instead of a single static exported page, rebuild the system in sections so
each part can be iterated independently:

1. **Foundations page** — color swatches (with hex + token name labeled),
   type scale samples, spacing scale visual, logo usage examples
2. **Components page** — each component shown in all of its states, using
   only the semantic tokens defined in Section 1
3. **Patterns/templates page** — 2–3 example layouts (e.g. landing section,
   dashboard card grid, form) built *only* from the components above, to
   prove the system holds together outside the original manual

When prompting Claude Design for each of these, include the specific token
table from Section 1 rather than describing the palette in prose — this is
what prevents colors drifting between components.

---

## 4. Usage Rules & Accessibility

- [ ] Minimum contrast ratio for text on `color-navy-900` (check against WCAG AA — verify blue/olive text-on-navy combos meet 4.5:1 for body text)
- [ ] Approved background/accent pairings (e.g. olive accent only on navy or white, never on blue)
- [ ] Logo minimum clear space and minimum size
- [ ] Do/Don't examples for misuse (e.g. don't tint the logo, don't place blue text on olive)

---

## 5. Governance

- [ ] Decide where the canonical token list lives (e.g. a single source-of-truth doc/file) so future Claude Design sessions can reference it directly
- [ ] Version the system (v1.0) so future changes are tracked as diffs, not full rebuilds
- [ ] Note open questions/unknowns here as you resolve them (e.g. exact font names, full type scale)

---

### Open Unknowns (fill in before rebuild)

- Exact font family names (heading + body)
- Full type scale values
- Whether a light theme variant is needed, or navy-dominant only
- Full component list beyond what's inferable from the manual excerpt
