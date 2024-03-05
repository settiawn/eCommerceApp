import Image from "next/image";
import { Card } from "./card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-slate-500 grid">
        <div className="col-span-5 bg-blue-300">
          {/* carousel */}
          <div className="flex rounded overflow-hidden shadow-lg bg-white relative px-0 p-0 justify-center content-center">
            <div className="flex absolute h-full w-full text-white">
              <div className="flex w-full justify-center content-center text-center bg-green-500 opacity-50 font-bold p-3 hover:cursor-pointer">
                <div className="flex items-center justify-center">read</div>
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
        <div className="col-span-4 bg-cyan-300">
          {/* per div */}
          <div className="text-center">
            <div className="font-bold py-5 text-6xl">Our Latest Series</div>
            <div className="px-5">
              These are the newest series that J-Novel Club has licensed, and
              with a regular or premium membership subscription you will be able
              to read beyond the first free part and keep up with new parts as
              they come out! We are currently publishing new content weekly from
              more than 30 ongoing series, including many fan favorites!
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 p-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold py-5 text-6xl">New Digital Releases</div>
            <div className="px-5">
              After we finish translating a volume, we compile it into a full
              ebook and retire the volume from the subscription service shortly
              after. You can find our light novel and manga ebooks on multiple
              online bookstores, but you can also buy our light novels right
              here on this site, which are compatible with any device and come
              with exclusive bonus content!
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 p-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <div className="text-center">
            <div className="font-bold py-5 text-6xl">New Physical Releases</div>
            <div className="px-5">
              While primarily a digital publisher, J-Novel Club also publishes
              physical print books for select series. Here are our latest
              releases, available at well-stocked bookstores, both online and
              offline! You can find a list of all of our series with physical
              releases here.
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 p-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-red-300">
          <div>
            These are the newest series that J-Novel Club has licensed, and with
            a regular or premium membership subscription you will be able to
            read beyond the first free part and keep up with new parts as they
            come out! We are currently publishing new content weekly from more
            than 30 ongoing series, including many fan favorites!
          </div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </div>
      </div>
    </main>
  );
}
