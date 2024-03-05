import Link from "next/link";

export function Card() {
  return (
    <div className="rounded overflow-hidden shadow-lg mt-8 bg-white relative px-0 p-0">
      <div className="font-bold text-xl absolute top-0 w-full bg-sky-500 p-3 bg-opacity-75 text-black text-opacity-75">
        "Name"
      </div>
      <div className="flex items-center">
        <div className="">
          <img src="https://mangadex.org/covers/e160a8e3-304f-4dca-838b-ee1821c490d8/c9392302-737f-4b2b-92f9-aff1dff45359.png" alt="cover_art" className="" />
        </div>
      </div>
      <div className="flex absolute bottom-0 w-full text-white">
        <Link
          href=""
          target="_blank"
          className="w-full bg-green-500 font-bold p-3 hover:cursor-pointer"
        >
          Read
        </Link>
      </div>
    </div>
  );
}
