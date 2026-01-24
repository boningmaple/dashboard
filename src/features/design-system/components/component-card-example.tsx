import { Button } from "@/components/ui/button";
import {
  CARD_VARIANTS,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardVariant = keyof typeof CARD_VARIANTS;

export default function CardExample() {
  return (
    <>
      <h2>Variants</h2>
      <div className="not-markdown flex gap-8 flex-wrap">
        {Object.keys(CARD_VARIANTS).map((variant) => (
          <Card
            key={variant}
            variant={variant as CardVariant}
            className="text-label-large w-full max-w-32 aspect-video p-2 flex-col-reverse"
          >
            {variant}
          </Card>
        ))}
      </div>
      <h2>Cards</h2>
      <div className="not-markdown flex gap-8 flex-wrap items-start">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button className="w-full">Action</Button>
            <Button variant="outlined" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>
        <Card
          variant="outlined"
          className="w-full max-w-xs pt-0 overflow-hidden"
        >
          <div className="w-full aspect-video bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardFooter className="gap-4">
            <Button className="rounded-md">Action</Button>
            <Button variant="outlined" className="rounded-md">
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
