export default function ShapeExample() {
  return (
    <>
      <h2>Border Radius</h2>
      <div className="flex gap-8 flex-wrap">
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-none">
          none
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-xs">
          xs
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-sm">
          sm
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-md">
          md
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-lg">
          lg
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-xl">
          xl
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-2xl">
          2xl
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-full">
          full
        </div>
      </div>
    </>
  );
}
