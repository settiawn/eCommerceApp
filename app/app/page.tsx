import { Product } from "@/db/models/product";
import { CardMedium } from "../components/card-med";
import { CardSmall } from "@/components/card-sm";

export type banner = {
  title: string;
  url: string;
  description: string;
};

export default async function Home() {
  const banners: banner[] = [
    {
      title: "JNC Original Light Novel Contest",
      url: "https://cms.j-novel.club/content/images/2023/07/mainsite_banner_OLNC.png",
      description:
        "Do you have an idea you've been dying to bring to life or a story you've been keeping for a rainy day? JNC is providing aspiring writers an opportunity to get their work digitally published with artwork and receive a cash prize of up to $15,000, plus receive a manga adaptation by Kadokawa!",
    },
    {
      title: "It Is Dangerous to March Alone! Read These Catchups.",
      url: "https://cms.j-novel.club/content/images/2024/03/Instagram-Catchups-2024-03_800.jpg",
      description: "It Is Dangerous to March Alone! Read These Catchups.",
    },
    {
      title: "Slayers Audiobook",
      url: "https://cms.j-novel.club/content/images/2022/11/Slayers-banner.png",
      description:
        "J-Novel Club is excited to present the audiobook for Slayers! Narrated by the anime's English dub voice actress Lisa Ortiz, listen the exciting adventures of Lina Inverse and her zany companions today!",
    },
  ];

  const responseRecentProducts = await fetch(
    "http://localhost:3000/api/products?sort=-1&limit=5",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const { data: recentProduct } = await responseRecentProducts.json();

  const responseNewManga = await fetch(
    "http://localhost:3000/api/products?sort=-1&limit=5&type=manga",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data: newManga } = await responseNewManga.json();

  const responseNewNovel = await fetch(
    "http://localhost:3000/api/products?sort=-1&limit=5&type=novel",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { data: newNovel } = await responseNewNovel.json()

  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-slate-500 grid">
        <div className="col-span-5 bg-blue-300">
          {/* carousel */}
          <div className="flex rounded overflow-hidden shadow-lg bg-white relative px-0 p-0 justify-center content-center">
            <div className="flex absolute h-full w-full bg-sky-800  opacity-50"></div>
            <div className="flex absolute h-full w-full text-white justify-center content-center text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-3xl pb-3 drop-shadow-xl">
                  <span className="font-bold text-3xl pb-3 drop-shadow-lg">
                    {banners[0].title}
                  </span>
                </div>
                <div className="px-11">
                  <span className="font-semibold pb-3 drop-shadow-lg">
                    {banners[0].description}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <img
                  src="https://cms.j-novel.club/content/images/2023/07/mainsite_banner_OLNC.png"
                  alt="cover_art"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* main menu */}

        <div className="col-span-4 bg-gray-700 pb-10">
          {/* per div */}
          <div className="pt-5">
            <div className="font-bold py-5 text-6xl text-center text-sky-500">
              Our Latest Series
            </div>
            <div className="px-20">
              These are the newest series that J-Novel Club has licensed, and
              with a regular or premium membership subscription you will be able
              to read beyond the first free part and keep up with new parts as
              they come out! We are currently publishing new content weekly from
              more than 30 ongoing series, including many fan favorites!
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 px-7">
              {recentProduct.map((x: Product) => (
                <CardMedium product={x} key={x.slug} />
              ))}
            </div>
            <div className="hover:text-blue-500 text-center font-semibold underline text-1xl hover:cursor-pointer py-8 text-2xl text-sky-200">
              See All
            </div>
          </div>

          {/* new manga series */}
          <div className="pt-5">
            <div className="font-bold py-5 text-6xl text-center text-sky-500">
              New Manga Releases
            </div>
            <div className="px-20">
              After we finish translating a volume, we compile it into a full
              ebook and retire the volume from the subscription service shortly
              after. You can find our light novel and manga ebooks on multiple
              online bookstores, but you can also buy our light novels right
              here on this site, which are compatible with any device and come
              with exclusive bonus content!
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 px-7">
              {newManga.map((x: Product) => (
                <CardMedium product={x} key={x.slug} />
              ))}
            </div>
            <div className="hover:text-blue-500 text-center font-semibold underline text-1xl hover:cursor-pointer py-8 text-2xl text-sky-200">
              See All
            </div>
          </div>

          {/* new novel series */}
          <div className="pt-5">
            <div className="font-bold py-5 text-6xl text-center text-sky-500">
              New Novel Releases
            </div>
            <div className="px-20">
              While primarily a digital publisher, J-Novel Club also publishes
              physical print books for select series. Here are our latest
              releases, available at well-stocked bookstores, both online and
              offline! You can find a list of all of our series with physical
              releases here.
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 px-7">
              {newNovel.map((x: Product) => (
                <CardMedium product={x} key={x.slug} />
              ))}
            </div>
            <div className="hover:text-blue-500 text-center font-semibold underline text-1xl hover:cursor-pointer py-8 text-2xl text-sky-200">
              See All
            </div>
          </div>
        </div>

        {/* bar kanan */}
        <div className="col-span-1 bg-gray-700">
          <div className="w-100 border m-2">
            <div className="flex flex-row justify-between font-bold text-2xl hover:cursor-pointer">
              <div className="hover:bg-gray-600 text-sky-500  w-1/2 text-center p-2">
                UPCOMING
              </div>
              <div className="hover:bg-gray-600 text-sky-500 border-b border-l w-1/2 text-center p-2">
                RECENT
              </div>
            </div>
            <div className="p-1">
              <CardSmall />
              <CardSmall />
              <CardSmall />
              <CardSmall />
              <CardSmall />
              <CardSmall />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
