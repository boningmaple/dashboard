import {
  ArrowLeftCircleIcon,
  ArrowRightIcon,
  PanelLeftCloseIcon,
} from "lucide-react";
import { BUTTON_SIZES, BUTTON_VARIANTS, Button } from "@/components/ui/button";

type ButtonVariant = keyof typeof BUTTON_VARIANTS;
type ButtonSize = keyof typeof BUTTON_SIZES;
const BUTTON_STATES = [
  "default",
  "hover",
  "active",
  "focus",
  "disabled",
  "invalid",
] as const;
type ButtonState = (typeof BUTTON_STATES)[number];
const BUTTON_STATE_CLASSES: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  default: {
    default: "",
    hover: "data-hover:bg-on-surface/85",
    active: "data-active:bg-on-surface/70",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  primary: {
    default: "",
    hover: "data-hover:bg-primary/85",
    active: "data-active:bg-primary/70",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  outlined: {
    default: "",
    hover: "data-hover:bg-surface-variant/25",
    active: "data-active:bg-surface-variant/50",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  text: {
    default: "",
    hover: "data-hover:bg-surface-variant/25",
    active: "data-active:bg-surface-variant/50",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  link: {
    default: "",
    hover: "data-hover:underline",
    active: "data-active:underline data-active:decoration-2",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  error: {
    default: "",
    hover: "data-hover:bg-error/85",
    active: "data-active:bg-error/70",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  success: {
    default: "",
    hover: "data-hover:bg-success/85",
    active: "data-active:bg-success/70",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
  warning: {
    default: "",
    hover: "data-hover:bg-warning/85",
    active: "data-active:bg-warning/70",
    focus: "data-focus:ring-3 data-focus:ring-outline/50",
    disabled: "",
    invalid: "data-focus:ring-3 data-focus:ring-error/50",
  },
};

function getStateAttrs(state: ButtonState) {
  switch (state) {
    case "hover":
      return { "data-hover": true };
    case "active":
      return { "data-active": true };
    case "focus":
      return { "data-focus": true };
    case "invalid":
      return { "data-focus": true, "aria-invalid": true };
    case "disabled":
      return { disabled: true };
    default:
      return {};
  }
}

export default function ButtonExample() {
  return (
    <>
      <h2>Variants</h2>
      <div className="flex gap-x-8 flex-wrap">
        {Object.keys(BUTTON_VARIANTS).map((variant) => (
          <div key={variant}>
            <h3>{variant[0].toUpperCase() + variant.slice(1)}</h3>
            {BUTTON_STATES.map((state) => (
              <div
                key={state}
                className="flex gap-2 items-center flex-wrap mb-2 last:mb-0"
              >
                <span className="w-14 text-body-medium-emphasized text-on-surface-variant">
                  {state}
                </span>
                {Object.keys(BUTTON_SIZES).map((size) => {
                  if (size.includes("icon")) return null;
                  return (
                    <Button
                      key={size}
                      variant={variant as ButtonVariant}
                      size={size as ButtonSize}
                      className={
                        BUTTON_STATE_CLASSES[variant as ButtonVariant][state]
                      }
                      {...getStateAttrs(state)}
                    >
                      {variant}
                    </Button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      <h2>Icon Left</h2>
      <div className="flex flex-col gap-8">
        {Object.keys(BUTTON_SIZES).map((size) => {
          if (size.includes("icon")) return null;
          return (
            <div key={size} className="flex gap-2 flex-wrap">
              {Object.keys(BUTTON_VARIANTS).map((variant) => (
                <Button
                  key={variant}
                  variant={variant as ButtonVariant}
                  size={size as ButtonSize}
                >
                  <ArrowLeftCircleIcon />
                  {variant}
                </Button>
              ))}
            </div>
          );
        })}
      </div>
      <h2>Icon Right</h2>
      <div className="flex flex-col gap-8">
        {Object.keys(BUTTON_SIZES).map((size) => {
          if (size.includes("icon")) return null;
          return (
            <div key={size} className="flex gap-2 flex-wrap">
              {Object.keys(BUTTON_VARIANTS).map((variant) => (
                <Button
                  key={variant}
                  variant={variant as ButtonVariant}
                  size={size as ButtonSize}
                >
                  {variant}
                  <ArrowRightIcon />
                </Button>
              ))}
            </div>
          );
        })}
      </div>
      <h2>Icon Only</h2>
      <div className="flex flex-col gap-8">
        {Object.keys(BUTTON_SIZES).map((size) => {
          if (!size.includes("icon")) return null;
          return (
            <div key={size} className="flex gap-2 flex-wrap">
              {Object.keys(BUTTON_VARIANTS).map((variant) => (
                <Button
                  key={variant}
                  variant={variant as ButtonVariant}
                  size={size as ButtonSize}
                >
                  <PanelLeftCloseIcon />
                </Button>
              ))}
            </div>
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
