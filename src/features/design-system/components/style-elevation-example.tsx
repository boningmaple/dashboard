export default function ElevationExample() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8 flex-wrap bg-surface-container w-fit p-8 rounded-md text-label-large">
        <div className="bg-surface size-24 rounded-md shadow-0 flex flex-col-reverse p-4">
          0
        </div>
        <div className="bg-surface size-24 rounded-md shadow-1 flex flex-col-reverse p-4">
          1
        </div>
        <div className="bg-surface size-24 rounded-md shadow-2 flex flex-col-reverse p-4">
          2
        </div>
        <div className="bg-surface size-24 rounded-md shadow-3 flex flex-col-reverse p-4">
          3
        </div>
        <div className="bg-surface size-24 rounded-md shadow-4 flex flex-col-reverse p-4">
          4
        </div>
        <div className="bg-surface size-24 rounded-md shadow-5 flex flex-col-reverse p-4">
          5
        </div>
      </div>
      <div className="relative flex h-64 w-64 items-center justify-center rounded-md bg-surface-container text-label-large">
        <div className="absolute z-0 size-56 rounded-md bg-surface shadow-0 flex items-end px-1.5 py-0.5">
          0
        </div>
        <div className="absolute z-10 size-48 rounded-md bg-surface shadow-1 flex items-end px-1.5 py-0.5">
          1
        </div>
        <div className="absolute z-20 size-40 rounded-md bg-surface shadow-2 flex items-end px-1.5 py-0.5">
          2
        </div>
        <div className="absolute z-30 size-32 rounded-md bg-surface shadow-3 flex items-end px-1.5 py-0.5">
          3
        </div>
        <div className="absolute z-40 size-24 rounded-md bg-surface shadow-4 flex items-end px-1.5 py-0.5">
          4
        </div>
        <div className="absolute z-50 size-16 rounded-md bg-surface shadow-5 flex items-end px-1.5 py-0.5">
          5
        </div>
      </div>
    </div>
  );
}
