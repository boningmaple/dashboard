export default function Color() {
  const relatedColors = [
    ["primary", "on-primary"],
    ["primary-container", "on-primary-container"],
    ["secondary", "on-secondary"],
    ["secondary-container", "on-secondary-container"],
    ["tertiary", "on-tertiary"],
    ["tertiary-container", "on-tertiary-container"],
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

  const surfaceRelatedColors = [
    "surface",
    "surface-variant",
    "on-surface",
    "on-surface-variant",
    "surface-container",
    "surface-container-high",
  ];

  const bgVar = (name: string) => `var(--color-${name})`;

  return (
    <div className="flex flex-col gap-8">
      {/* Role color pairs */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-6">
        {relatedColors.map(([bg, onBg]) => (
          <div key={bg} className="grid grid-rows-2 overflow-hidden rounded-xl">
            <div
              style={{
                backgroundColor: bgVar(bg),
                color: bgVar(`on-${bg}`),
              }}
              className="flex min-h-18 items-end px-4 py-3 text-sm font-medium"
            >
              {bg}
            </div>

            <div
              style={{
                backgroundColor: bgVar(onBg),
                color: bgVar(bg),
              }}
              className="flex min-h-18 items-end px-4 py-3 text-sm font-medium"
            >
              {onBg}
            </div>
          </div>
        ))}
      </div>

      {/* Surface + outline */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
        {surfaceRelatedColors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: bgVar(color),
              color: bgVar(color.startsWith("on-") ? "surface" : "on-surface"),
            }}
            className="flex min-h-18 items-end rounded-xl px-4 py-3 text-sm font-medium"
          >
            {color}
          </div>
        ))}

        <div
          style={{
            backgroundColor: bgVar("outline"),
            color: bgVar("on-surface"),
          }}
          className="flex min-h-18 items-end rounded-xl px-4 py-3 text-sm font-medium"
        >
          outline
        </div>

        <div
          style={{
            backgroundColor: bgVar("outline-variant"),
            color: bgVar("on-surface"),
          }}
          className="flex min-h-18 items-end rounded-xl px-4 py-3 text-sm font-medium"
        >
          outline-variant
        </div>
      </div>
    </div>
  );
}
