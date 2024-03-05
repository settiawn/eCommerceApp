export function CardSmall() {
  return (
    <div className="my-1 flex hover:cursor-pointer hover:text-blue-500">
      <div className="flex-none w-28 relative text-center p-1">
        <img
          src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
          alt="image not found 404"
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 px-1">
        <div className="font-bold w-72">
          Watashi ga Koibito ni Nareru Wake Naijan, Muri Muri! (Muri
          Janakatta!?)
        </div>
        <div className="py-2 text-white">Volume 6</div>
      </div>
    </div>
  );
}
