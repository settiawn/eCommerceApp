interface VolInfo {
  img: string;
  vol: number;
}
export function MiniCard({ img, vol }: VolInfo) {
  return (
    <div className="rounded-lg overflow-hidden mt-8 relative hover:text-gray-700">
      <div className="flex items-center">
        <div className="w-full">
          <img src={img} alt="cover_art" className="opacity-90 w-full" />
        </div>
      </div>
      <div className="flex absolute bottom-0 w-full bg-gray-500">
        <div className="w-full font-bold p-2">Volume {vol + 1}</div>
      </div>
    </div>
  );
}
