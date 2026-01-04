const typefaceBrand = "Roboto";
const typefacePlain = "Roboto";
const weightRegular = 400;
const weightMedium = 500;
const weightBold = 700;

function pxToRem(px: number, base = 16) {
  return `${px / base}rem`;
}

function typography(
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
  letterSpacing = 0,
) {
  return {
    fontSize: pxToRem(fontSize),
    fontWeight,
    lineHeight: pxToRem(lineHeight),
    letterSpacing: pxToRem(letterSpacing),
  };
}

const typeScale = {
  baseline: {
    display: {
      large: typography(57, weightRegular, 64, 0.25),
      medium: typography(45, weightRegular, 52),
      small: typography(36, weightRegular, 44),
    },
    headline: {
      large: typography(32, weightRegular, 40, 0),
      medium: typography(28, weightRegular, 36, 0),
      small: typography(24, weightRegular, 32, 0),
    },
    title: {
      large: typography(22, weightRegular, 28, 0),
      medium: typography(16, weightRegular, 24, 0.15),
      small: typography(14, weightRegular, 20, 0.1),
    },
    body: {
      large: typography(16, weightRegular, 24, 0.5),
      medium: typography(14, weightRegular, 20, 0.25),
      small: typography(12, weightRegular, 16, 0.4),
    },
    label: {
      large: typography(14, weightRegular, 20, 0.1),
      medium: typography(12, weightRegular, 16, 0.5),
      small: typography(11, weightRegular, 16, 0.5),
    },
  },
};

type TypeScale = typeof typeScale;
function generateTypeScaleCss(typeScale: TypeScale): string {
  let css = "@theme {\n";

  for (const group in typeScale) {
    const groupValue = typeScale[group as keyof TypeScale];

    for (const role in groupValue) {
      const roleValue = groupValue[role as keyof typeof groupValue];

      for (const size in roleValue) {
        const token = roleValue[size as keyof typeof roleValue];

        const baseName = `--text-${role}-${size}`;

        // base token
        css += `  ${baseName}: ${token.fontSize};\n`;
        css += `  ${baseName}--font-weight: ${token.fontWeight};\n`;
        css += `  ${baseName}--line-height: ${token.lineHeight};\n`;
        css += `  ${baseName}--letter-spacing: ${token.letterSpacing};\n\n`;

        // emphasized token
        css += `  ${baseName}-emphasized: ${token.fontSize};\n`;
        css += `  ${baseName}-emphasized--font-weight: ${weightBold};\n`;
        css += `  ${baseName}-emphasized--line-height: ${token.lineHeight};\n`;
        css += `  ${baseName}-emphasized--letter-spacing: ${token.letterSpacing};\n\n`;
      }
    }
  }

  css += "}\n";
  return css;
}

const css = generateTypeScaleCss(typeScale);
console.log(css);
