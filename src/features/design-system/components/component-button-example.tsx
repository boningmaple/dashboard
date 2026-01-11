import {
  ArrowLeftCircleIcon,
  ArrowRightIcon,
  PanelLeftCloseIcon,
} from "lucide-react";
import { BUTTON_SIZES, BUTTON_VARIANTS, Button } from "@/components/ui/button";

type ButtonVariant = keyof typeof BUTTON_VARIANTS;
type ButtonSize = keyof typeof BUTTON_SIZES;
const BUTTON_STATES = [
  "enabled",
  "disabled",
  "hovered",
  "focused",
  "pressed",
  "invalid",
] as const;
type ButtonState = (typeof BUTTON_STATES)[number];
const BUTTON_STATE_CLASSES: Record<ButtonState, string> = {
  enabled: "",
  disabled: "",
  hovered: "data-hovered:state-hovered",
  focused: "data-focused:state-focused",
  pressed: "data-pressed:state-pressed",
  invalid: "data-focused:state-focused data-focused:outline-error/50",
};

function getDataState(state: ButtonState) {
  switch (state) {
    case "disabled":
      return { disabled: true };
    case "hovered":
      return { "data-hovered": true };
    case "focused":
      return { "data-focused": true };
    case "pressed":
      return { "data-pressed": true };
    case "invalid":
      return { "data-focused": true, "aria-invalid": true };
    default:
      return {};
  }
}

export default function ButtonExample() {
  return (
    <>
      <h2>Variants</h2>
      <div>
        {Object.keys(BUTTON_VARIANTS).map((variant) => (
          <div key={variant} className="first:[&>h3]:mt-0">
            <h3>{variant}</h3>
            <div className="flex gap-4 flex-wrap">
              {BUTTON_STATES.map((state) => (
                <Button
                  key={state}
                  variant={variant as ButtonVariant}
                  className={BUTTON_STATE_CLASSES[state as ButtonState]}
                  {...getDataState(state)}
                >
                  {state}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2>Icon Left</h2>
      <div className="flex gap-4 flex-wrap">
        {Object.keys(BUTTON_VARIANTS).map((variant) => (
          <Button key={variant} variant={variant as ButtonVariant}>
            <ArrowLeftCircleIcon />
            {variant}
          </Button>
        ))}
      </div>
      <h2>Icon Right</h2>
      <div className="flex gap-4 flex-wrap">
        {Object.keys(BUTTON_VARIANTS).map((variant) => (
          <Button key={variant} variant={variant as ButtonVariant}>
            {variant}
            <ArrowRightIcon />
          </Button>
        ))}
      </div>
      <h2>Icon Only</h2>
      <div className="flex gap-4 flex-wrap">
        {Object.keys(BUTTON_VARIANTS).map((variant) => (
          <Button
            key={variant}
            variant={variant as ButtonVariant}
            size="icon-sm"
          >
            <PanelLeftCloseIcon />
          </Button>
        ))}
      </div>
      <h2>Sizes</h2>
      <div className="flex gap-4 flex-wrap items-center">
        {Object.keys(BUTTON_SIZES).map((size) => {
          if (size.includes("icon")) return null;
          return (
            <Button key={size} size={size as ButtonSize}>
              {size}
            </Button>
          );
        })}
      </div>
      <h2>Others</h2>
      <div className="flex gap-6 items-center flex-wrap">
        <Button
          variant="text"
          className="
            rounded-md
            border-2 border-foreground
            hover:bg-background
            active:bg-background
            font-bold
            shadow-[4px_4px_0_0] shadow-foreground
            transition-all
            hover:translate-x-px hover:translate-y-px
            hover:shadow-[3px_3px_0_0]
            active:translate-x-1 active:translate-y-1
            active:shadow-none
            text-body-medium
            text-on-surface
          "
        >
          Neobrutalism
        </Button>
      </div>
    </>
  );
}
