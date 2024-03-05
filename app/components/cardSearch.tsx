export function CardSearch() {
  return (
    <div className="border p-2 my-1 font-bold flex rounded-lg relative">
      <div className="flex-none w-60 relative text-center hover:opacity-80 hover:cursor-pointer">
        <img
          src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
          alt="image not found 404"
          className="rounded-lg"
        />
        <div className="flex justify-between absolute bottom-0 w-full">
          <div className="rounded-b-lg w-full bg-green-500 font-bold p-3 text-white hover:cursor-pointer">
            Manga
          </div>
        </div>
      </div>
      <div className="flex-1 mx-5">
        <div className="text-3xl mb-3 hover:cursor-pointer hover:text-blue-500">
          Watashi ga Koibito ni Nareru Wake Naijan, Muri Muri! (Muri
          Janakatta!?)
        </div>
        <div className="font-normal">
          Longing to be a normie, I, Renako Amaori, am finally making my high
          school debut after working so hard for it. However due to my
          communication impairment, I have a gloomy aura. And after being in the
          normie group day in day out, I got so exhausted and said “I can't do
          this anymore,” and reached my limit!
        </div>
      </div>
      <div className="flex justify-between absolute bottom-0 right-0">
          <div className="rounded-br-lg w-full bg-sky-500 font-bold p-3 text-white hover:cursor-pointer hover:bg-blue-500">
            ADD TO WISHLIST
          </div>
        </div>
    </div>
  );
}
