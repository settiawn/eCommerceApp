export default function ProductDetail() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-slate-500 grid">
        <div className="col-span-5 bg-blue-300"></div>

        <div className="col-span-1 bg-red-300 m-4">
          <div className="flex-none w-96 relative text-center">
            <div className="font-bold text-xl absolute top-0 w-full bg-sky-500 p-3 bg-opacity-75 text-black text-opacity-75">
              Manga
            </div>
            <img
              src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
              alt="image not found 404"
            />
            <div className="flex justify-between absolute bottom-0 w-full">
              <div className="w-full bg-sky-500 font-bold p-3 text-white hover:cursor-pointer">
                ADD TO WISHLIST
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-cyan-300">
          {/* per div */}

          <div className="flex-1 m-5">
            <div className="text-3xl mb-3">
              Watashi ga Koibito ni Nareru Wake Naijan, Muri Muri! (Muri
              Janakatta!?)
            </div>
            <div className="font-normal">
              Longing to be a normie, I, Renako Amaori, am finally making my
              high school debut after working so hard for it. However due to my
              communication impairment, I have a gloomy aura. And after being in
              the normie group day in day out, I got so exhausted and said “I
              can't do this anymore,” and reached my limit!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
