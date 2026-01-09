import { CARD_VARIANTS, Card } from "@/components/ui/card";

type CardVariant = keyof typeof CARD_VARIANTS;
const Card_STATES = ["default", "hover", "active", "focus", "disabled"];
type CardState = (typeof Card_STATES)[number];
const Card_STATE_CLASSES: Record<CardVariant, Record<CardState, string>> = {
  outlined: {
    default: "",
    hover: "",
    active: "",
    focus: "",
    disabled: "",
  },
  elevated: {
    default: "",
    hover: "",
    active: "",
    focus: "",
    disabled: "",
  },
  filled: {
    default: "",
    hover: "",
    active: "",
    focus: "",
    disabled: "",
  },
};

export default function CardExample() {
  return (
    <>
      <h2>Variants</h2>
      <div className="flex gap-x-8 flex-wrap">
        {Object.keys(CARD_VARIANTS).map((variant) => (
          <Card
            key={variant}
            variant={variant as CardVariant}
            className="text-label-large w-32 aspect-video p-2 flex-col-reverse"
          >
            {variant}
          </Card>
        ))}
      </div>
    </>
  );
}
