const color = {
  /* ───────────────────────────
   * Primary
   * ─────────────────────────── */
  primary: "light-dark(oklch(0.55 0.14 260), oklch(0.70 0.13 260))",
  onPrimary: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  primaryContainer: "light-dark(oklch(0.92 0.05 260), oklch(0.30 0.10 260))",
  onPrimaryContainer: "light-dark(oklch(0.25 0.10 260), oklch(0.95 0.04 260))",

  /* ───────────────────────────
   * Secondary
   * ─────────────────────────── */
  secondary: "light-dark(oklch(0.55 0.06 250), oklch(0.68 0.06 250))",
  onSecondary: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  secondaryContainer: "light-dark(oklch(0.92 0.02 250), oklch(0.32 0.05 250))",
  onSecondaryContainer:
    "light-dark(oklch(0.30 0.04 250), oklch(0.94 0.03 250))",

  /* ───────────────────────────
   * Tertiary
   * ─────────────────────────── */
  tertiary: "light-dark(oklch(0.58 0.10 330), oklch(0.72 0.10 330))",
  onTertiary: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  tertiaryContainer: "light-dark(oklch(0.93 0.04 330), oklch(0.32 0.07 330))",
  onTertiaryContainer: "light-dark(oklch(0.30 0.06 330), oklch(0.95 0.04 330))",

  /* ───────────────────────────
   * Surface system (M3)
   * ─────────────────────────── */
  surface: "light-dark(oklch(0.99 0 0), oklch(0.15 0 0))",
  onSurface: "light-dark(oklch(0.18 0 0), oklch(0.95 0 0))",

  surfaceVariant: "light-dark(oklch(0.94 0.01 260), oklch(0.25 0.01 260))",
  onSurfaceVariant: "light-dark(oklch(0.40 0.01 260), oklch(0.80 0.01 260))",

  surfaceContainerLowest: "light-dark(oklch(1 0 0), oklch(0.12 0 0))",
  surfaceContainerLow: "light-dark(oklch(0.98 0 0), oklch(0.18 0 0))",
  surfaceContainer: "light-dark(oklch(0.96 0 0), oklch(0.22 0 0))",
  surfaceContainerHigh: "light-dark(oklch(0.94 0 0), oklch(0.26 0 0))",
  surfaceContainerHighest: "light-dark(oklch(0.92 0 0), oklch(0.30 0 0))",

  /* ───────────────────────────
   * Outline
   * ─────────────────────────── */
  outline: "light-dark(oklch(0.65 0.01 260), oklch(0.50 0.01 260))",
  outlineVariant: "light-dark(oklch(0.80 0.01 260), oklch(0.35 0.01 260))",

  /* ───────────────────────────
   * Info (blue)
   * ─────────────────────────── */
  info: "light-dark(oklch(0.55 0.14 240), oklch(0.70 0.14 240))",
  onInfo: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  infoContainer: "light-dark(oklch(0.92 0.05 240), oklch(0.30 0.10 240))",
  onInfoContainer: "light-dark(oklch(0.25 0.10 240), oklch(0.95 0.05 240))",

  /* ───────────────────────────
   * Success (green)
   * ─────────────────────────── */
  success: "light-dark(oklch(0.55 0.14 145), oklch(0.70 0.13 145))",
  onSuccess: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  successContainer: "light-dark(oklch(0.92 0.06 145), oklch(0.30 0.10 145))",
  onSuccessContainer: "light-dark(oklch(0.25 0.10 145), oklch(0.95 0.05 145))",

  /* ───────────────────────────
   * Important (emphasis)
   * ─────────────────────────── */
  important: "light-dark(oklch(0.60 0.16 30), oklch(0.72 0.16 30))",
  onImportant: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  importantContainer: "light-dark(oklch(0.93 0.07 30), oklch(0.32 0.12 30))",
  onImportantContainer: "light-dark(oklch(0.30 0.12 30), oklch(0.95 0.06 30))",

  /* ───────────────────────────
   * Warning (amber)
   * ─────────────────────────── */
  warning: "light-dark(oklch(0.65 0.16 85), oklch(0.78 0.16 85))",
  onWarning: "light-dark(oklch(0.20 0 0), oklch(0.20 0 0))",
  warningContainer: "light-dark(oklch(0.94 0.08 85), oklch(0.35 0.12 85))",
  onWarningContainer: "light-dark(oklch(0.30 0.12 85), oklch(0.96 0.07 85))",

  /* ───────────────────────────
   * Error (official M3)
   * ─────────────────────────── */
  error: "light-dark(oklch(0.55 0.18 25), oklch(0.70 0.18 25))",
  onError: "light-dark(oklch(0.98 0 0), oklch(0.20 0 0))",
  errorContainer: "light-dark(oklch(0.92 0.08 25), oklch(0.32 0.14 25))",
  onErrorContainer: "light-dark(oklch(0.30 0.14 25), oklch(0.95 0.07 25))",
};
type ColorObject = typeof color;

function generateColorCss(colorObject: ColorObject) {
  const toKebab = (str: string) =>
    str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

  return Object.entries(colorObject)
    .map(([key, value]) => {
      const kebabKey = toKebab(key);

      const cssVarName = `--color-${kebabKey}`;

      return `${cssVarName}: ${value};`;
    })
    .join("\n");
}

console.log(generateColorCss(color));
