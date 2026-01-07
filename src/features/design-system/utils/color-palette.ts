import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from "@material/material-color-utilities";

const colorRoles = [
  "primary",
  "secondary",
  "tertiary",
  "neutral",
  "neutral-variant",
  "information",
  "success",
  "important",
  "warning",
  "error",
];

function generateColorRolePaletteStringTemplate(
  hue: number,
  chroma: number,
  colorRole: string,
  toneRange: Array<number>,
) {
  if (hue < 0 && hue > 360) {
    throw new Error("No such hue.");
  }
  if (chroma < 0 && chroma > 200) {
    throw new Error("No such hue.");
  }
  if (!colorRoles.includes(colorRole)) {
    throw new Error("No such corlor role");
  }
  if (toneRange.length <= 0) {
    throw new Error("Tone range must > 0.");
  }

  const sectionComment = (title: string) => {
    const capitalizeFirstChar = title.charAt(0).toUpperCase() + title.slice(1);
    return `
/*============================================================================
=${capitalizeFirstChar
      .padStart(Math.floor((76 + capitalizeFirstChar.length) / 2))
      .padEnd(76)}=
============================================================================*/
`;
  };

  const strArray = [];
  strArray.push(sectionComment(colorRole));
  const prefixStr = "--color-palette";
  const tonalPalette = TonalPalette.fromHueAndChroma(hue, chroma);
  toneRange.forEach((tone) => {
    const color = hexFromArgb(tonalPalette.tone(tone));
    strArray.push(`${prefixStr}-${colorRole}-${tone}: ${color};\n`);
  });
  return strArray;
}

const primaryHue = 276.37; // Black #161823 oklch(0.2123 0.022 276.37)
const informationHueAndChroma = TonalPalette.fromInt(argbFromHex("#4493f8"));
const successHueAndChroma = TonalPalette.fromInt(argbFromHex("#3fb950"));
const importantHueAndChroma = TonalPalette.fromInt(argbFromHex("#ab7df8"));
const warningHueAndChroma = TonalPalette.fromInt(argbFromHex("#d29922"));
const errorHueAndChroma = TonalPalette.fromInt(argbFromHex("#f85149"));

const primarySecondaryTertiaryColorToneRange = [
  ...Array.from({ length: 11 }, (_, i) => i * 10), // 0 to 100, step 10
];

const primaryColorsStringArray = generateColorRolePaletteStringTemplate(
  primaryHue,
  48,
  colorRoles[0],
  primarySecondaryTertiaryColorToneRange,
);

const secondaryColorsStringArray = generateColorRolePaletteStringTemplate(
  primaryHue,
  16,
  colorRoles[1],
  primarySecondaryTertiaryColorToneRange,
);

const tertiaryColorsStringArray = generateColorRolePaletteStringTemplate(
  primaryHue - 120,
  24,
  colorRoles[2],
  primarySecondaryTertiaryColorToneRange,
);

const neutralColorToneRange = [
  ...Array.from({ length: 16 }, (_, i) => i), // 0 to 15, step 1
  ...Array.from({ length: 7 }, (_, i) => 20 + i * 10), // 20 to 80, step 10
  ...Array.from({ length: 16 }, (_, i) => 85 + i), // 91 to 100, step 1
];

const neutralColorsStringArray = generateColorRolePaletteStringTemplate(
  primaryHue,
  4,
  colorRoles[3],
  neutralColorToneRange,
);

const neutralVariantColorToneRange = [
  0,
  ...Array.from({ length: 15 }, (_, i) => 5 + i), // 5 to 19, step 1
  ...Array.from({ length: 7 }, (_, i) => 20 + i * 10), // 20 to 80, step 10
  ...Array.from({ length: 15 }, (_, i) => 81 + i), // 81 to 95, step 1
  100,
];

const neutralVariantColorsStringArray = generateColorRolePaletteStringTemplate(
  primaryHue,
  8,
  colorRoles[4],
  neutralVariantColorToneRange,
);

const alertColorToneRane = [...Array.from({ length: 11 }, (_, i) => i * 10)];

const informationColorsStringArray = generateColorRolePaletteStringTemplate(
  informationHueAndChroma.hue,
  informationHueAndChroma.chroma,
  colorRoles[5],
  alertColorToneRane,
);

const successColorsStringArray = generateColorRolePaletteStringTemplate(
  successHueAndChroma.hue,
  successHueAndChroma.chroma,
  colorRoles[6],
  alertColorToneRane,
);

const importantColorsStringArray = generateColorRolePaletteStringTemplate(
  importantHueAndChroma.hue,
  importantHueAndChroma.chroma,
  colorRoles[7],
  alertColorToneRane,
);

const warningColorsStringArray = generateColorRolePaletteStringTemplate(
  warningHueAndChroma.hue,
  warningHueAndChroma.chroma,
  colorRoles[8],
  alertColorToneRane,
);

const errorColorsStringArray = generateColorRolePaletteStringTemplate(
  errorHueAndChroma.hue,
  errorHueAndChroma.chroma,
  colorRoles[9],
  alertColorToneRane,
);

const paletteCssTemplate = ["@theme {"]
  .concat(
    primaryColorsStringArray,
    secondaryColorsStringArray,
    tertiaryColorsStringArray,
    neutralColorsStringArray,
    neutralVariantColorsStringArray,
    informationColorsStringArray,
    successColorsStringArray,
    importantColorsStringArray,
    warningColorsStringArray,
    errorColorsStringArray,
    "}\n",
  )
  .join("");

console.log(paletteCssTemplate);
