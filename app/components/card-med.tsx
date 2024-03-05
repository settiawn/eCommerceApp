export function CardMedium() {
  return (
    <>
      <div className="flex flex-col hover:cursor-pointer hover:text-blue-500 text-center">
        <div className="rounded-lg overflow-hidden shadow-lg mt-8 bg-white relative px-0 p-0">
          <div className="flex items-center">
            <div className="">
              <img
                src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                alt="cover_art"
                className=""
              />
            </div>
          </div>
          <div className="flex absolute bottom-0 w-full text-white">
            <div className="w-full bg-green-500 font-bold p-2">
              Manga
            </div>
          </div>
          <div className="flex absolute top-0 w-full">
            <div className="w-full bg-red-500 text-white hover:bg-red-700 font-bold p-2">
              REMOVE WISHLIST
            </div>
          </div>
        </div>
        <div className="w-full p-1 mt-2 font-semibold line-clamp-2">
          Watashi ga Koibito ni Nareru Wake Naijan, Muri Muri! (Muri
          Janakatta!?)
        </div>
        <div className="text-center font-normal text-sm mt-1">
          Musshu, Mikami Teren
        </div>
      </div>
    </>
  );
}
