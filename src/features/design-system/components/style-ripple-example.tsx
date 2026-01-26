import Ripple from "@/styles/ripple";

export default function RippleExample() {
  return (
    <>
      <div className="mx-auto my-4 size-28 border rounded-md relative overflow-hidden">
        <Ripple />
      </div>
      <div className="mx-auto my-4 w-72 h-28 border rounded-md relative overflow-hidden">
        <Ripple />
      </div>
      <div className="mx-auto my-4 w-28 h-72 border rounded-md relative overflow-hidden">
        <Ripple />
      </div>
    </>
  );
}
