export default function ShapeExample() {
  return (
    <>
      <h2>Border Radius</h2>
      <div className="flex gap-8 flex-wrap">
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-none">
          none
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-extra-small">
          extra-small
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-small">
          small
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-medium">
          medium
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-large">
          large
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-large-increased">
          large-increased
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-extra-large">
          extra-large
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-extra-large-increased">
          extra-large-increased
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-extra-extra-large">
          extra-extra-large
        </div>
        <div className="text-label-large w-32 aspect-video p-2 flex flex-col-reverse bg-on-surface text-surface rounded-tr-full">
          full
        </div>
      </div>
    </>
  );
}
