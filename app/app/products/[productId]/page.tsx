export default function ProductDetail() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className="grid">
        <div className="col-span-5 bg-blue-300">
          <div className="flex h-screen rounded overflow-hidden shadow-lg bg-white relative px-0 p-0 justify-center content-center">
            <div className="flex items-center">
              <img
                src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                alt="cover_art"
                className="blur opacity-90"
              />
            </div>
            <div className="absolute flex top-20">
              <div className="col-span-1 ml-5 rounded-l">
                <div className="flex-none w-96 relative text-center mr-2">
                  <img
                    src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                    alt="image not found 404"
                    className="rounded-sm"
                  />
                  <div className="flex justify-between absolute bottom-0 w-full">
                    <div className="w-full bg-sky-500 font-bold p-3 text-white hover:cursor-pointer hover:bg-blue-500 rounded-b-sm">
                      ADD TO WISHLIST
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 bg-gray-700 mr-5 rounded-r shadow-2xl">

                  {/* metadata */}
                <div className="flex-1 m-5">
                  <div className="text-3xl mb-3 font-bold">
                    Watashi ga Koibito ni Nareru Wake Naijan, Muri Muri! (Muri
                    Janakatta!?)
                  </div>
                  <div className="text-1xl mb-3 font-bold">
                    わたしが恋人になれるわけないじゃん、ムリムリ！（※ムリじゃなかった!?）
                  </div>
                  <div className="flex flex-row gap-1 my-6">
                    {/* ini tags jadiin komponen ajah */}
                    <div className="bg-red-500 rounded-lg p-1 px-2">Yuri</div>
                    <div className="bg-red-500 rounded-lg p-1 px-2">Comedy</div>
                    <div className="bg-red-500 rounded-lg p-1 px-2">Drama</div>
                  </div>
                  <div className="font-normal my-5">
                    Longing to be a normie, I, Renako Amaori, am finally making
                    my high school debut after working so hard for it. However
                    due to my communication impairment, I have a gloomy aura.
                    And after being in the normie group day in day out, I got so
                    exhausted and said “I can't do this anymore,” and reached my
                    limit!
                  </div>
                </div>
                    
                    {/* images */}
                <div className="grid gap-4 grid-cols-5 grid-rows-1 px-5 mb-8">

                  {/* bikin komponen image */}
                  <div className="rounded-lg overflow-hidden mt-8 relative hover:text-gray-700">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                            alt="cover_art"
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div className="flex absolute bottom-0 w-full bg-gray-500">
                        <div className="w-full font-bold p-2">
                          Volume 6
                        </div>
                      </div>
                    </div>
                  <div className="rounded-lg overflow-hidden mt-8 relative hover:text-gray-700">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                            alt="cover_art"
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div className="flex absolute bottom-0 w-full bg-gray-500">
                        <div className="w-full font-bold p-2">
                          Volume 6
                        </div>
                      </div>
                    </div>
                  <div className="rounded-lg overflow-hidden mt-8 relative hover:text-gray-700">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                            alt="cover_art"
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div className="flex absolute bottom-0 w-full bg-gray-500">
                        <div className="w-full font-bold p-2">
                          Volume 6
                        </div>
                      </div>
                    </div>
                  <div className="rounded-lg overflow-hidden mt-8 relative hover:text-gray-700">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                            alt="cover_art"
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div className="flex absolute bottom-0 w-full bg-gray-500">
                        <div className="w-full font-bold p-2">
                          Volume 6
                        </div>
                      </div>
                    </div>
                  <div className="rounded-lg overflow-hidden mt-8 relative hover:text-gray-700">
                      <div className="flex items-center">
                        <div className="">
                          <img
                            src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png"
                            alt="cover_art"
                            className="opacity-90"
                          />
                        </div>
                      </div>
                      <div className="flex absolute bottom-0 w-full bg-gray-500">
                        <div className="w-full font-bold p-2">
                          Volume 6
                        </div>
                      </div>
                    </div>


                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
