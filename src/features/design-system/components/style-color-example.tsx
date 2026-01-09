const accentColors = [
  ["primary", "on-primary"],
  ["primary-container", "on-primary-container"],
  ["secondary", "on-secondary"],
  ["secondary-container", "on-secondary-container"],
  ["tertiary", "on-tertiary"],
  ["tertiary-container", "on-tertiary-container"],
];

const alertColors = [
  ["info", "on-info"],
  ["info-container", "on-info-container"],
  ["success", "on-success"],
  ["success-container", "on-success-container"],
  ["important", "on-important"],
  ["important-container", "on-important-container"],
  ["warning", "on-warning"],
  ["warning-container", "on-warning-container"],
  ["error", "on-error"],
  ["error-container", "on-error-container"],
];

const surfaceColors = [
  ["surface-dim", "on-surface"],
  ["surface", "on-surface"],
  ["surface-bright", "on-surface"],
  ["on-surface", "surface"],
  ["on-surface-variant", "surface"],
];

const surfaceContainerColors = [
  ["surface-container-lowest", "on-surface"],
  ["surface-container-low", "on-surface"],
  ["surface-container", "on-surface"],
  ["surface-container-high", "on-surface"],
  ["surface-container-highest", "on-surface"],
];

const outlineColors = [
  ["outline", "surface"],
  ["outline-variant", "on-surface"],
];

const inverseColors = [
  ["inverse-surface", "surface"],
  ["inverse-on-surface", "on-surface"],
  ["inverse-primary", "on-primary"],
];

const miscColors = [
  ["scrim", "white"],
  ["shadow", "white"],
];

const bgVar = (name: string) => `var(--color-${name})`;

function ColorBlock({ color, onColor }: { color: string; onColor: string }) {
  return (
    <div
      className="text-body-small w-43 h-18 p-4"
      style={{
        backgroundColor: bgVar(color),
        color: bgVar(onColor),
      }}
    >
      {color}
    </div>
  );
}

export default function ColorExample() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 flex-wrap">
        {accentColors.map(([color, onColor]) => (
          <div key={color} className="grid grid-rows-2">
            <ColorBlock color={color} onColor={onColor} />
            <ColorBlock color={onColor} onColor={color} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {alertColors.map(([color, onColor]) => (
          <div key={color} className="grid grid-rows-2">
            <ColorBlock color={color} onColor={onColor} />
            <ColorBlock color={onColor} onColor={color} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {surfaceColors.map(([color, onColor]) => (
          <ColorBlock key={color} color={color} onColor={onColor} />
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {surfaceContainerColors.map(([color, onColor]) => (
          <ColorBlock key={color} color={color} onColor={onColor} />
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {outlineColors.map(([color, onColor]) => (
          <ColorBlock key={color} color={color} onColor={onColor} />
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {inverseColors.map(([color, onColor]) => (
          <ColorBlock key={color} color={color} onColor={onColor} />
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {miscColors.map(([color, onColor]) => (
          <ColorBlock key={color} color={color} onColor={onColor} />
        ))}
      </div>
    </div>
  );
}
