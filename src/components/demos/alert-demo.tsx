import {
  CheckCircle2Icon,
  InfoIcon,
  OctagonAlertIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import {
  ALERT_VARIANTS,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

type AlertVariant = keyof typeof ALERT_VARIANTS;

export default function AlertExample() {
  return (
    <>
      <h2>Variants</h2>
      {Object.keys(ALERT_VARIANTS).map((variant) => (
        <Fragment key={variant}>
          <h3>{variant}</h3>
          <Alert variant={variant as AlertVariant} className="not-markdown">
            <CheckCircle2Icon />
            <AlertTitle>Your changes have been saved</AlertTitle>
            <AlertDescription>
              Alert with icon, title and description.
            </AlertDescription>
          </Alert>
        </Fragment>
      ))}
      <h2>Filled with Color</h2>
      <div className="flex flex-col gap-4 mb-4">
        <Alert className="bg-info text-on-info">
          <InfoIcon />
          <AlertTitle>Info text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert className="bg-success text-on-success">
          <CheckCircle2Icon />
          <AlertTitle>Success text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert className="bg-warning text-on-warning">
          <TriangleAlertIcon />
          <AlertTitle>Warning text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert className="bg-error text-on-error">
          <OctagonAlertIcon />
          <AlertTitle>Error text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <Alert className="bg-info-container text-on-info-container">
          <InfoIcon />
          <AlertTitle>Info text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert className="bg-success-container text-on-success-container">
          <CheckCircle2Icon />
          <AlertTitle>Success text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert className="bg-warning-container text-on-warning-container">
          <TriangleAlertIcon />
          <AlertTitle>Warning text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert className="bg-error-container text-on-error-container">
          <OctagonAlertIcon />
          <AlertTitle>Error text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>
      <h2>Outlined with Color</h2>
      <div className="not-markdown flex flex-col gap-4">
        <Alert variant="outlined" className="text-info border-info">
          <InfoIcon />
          <AlertTitle>Info text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert variant="outlined" className="text-success border-success">
          <CheckCircle2Icon />
          <AlertTitle>Success text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert variant="outlined" className="text-warning border-warning">
          <TriangleAlertIcon />
          <AlertTitle>Warning text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
        <Alert variant="outlined" className="text-error border-error">
          <OctagonAlertIcon />
          <AlertTitle>Error text</AlertTitle>
          <AlertDescription>
            Alert with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
}
