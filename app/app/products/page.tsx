import { CardLarge } from "../../components/card-lg";

export default function Products() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-gray-700 grid">
        <div className="col-span-5 bg-blue-300"></div>
        <div className="col-span-1 bg-gray-700 py-1 px-3">
          <div className="w-full text-sky-500 font-bold text-2xl p-1 border-b-4">
            Sort By
          </div>
          <div className="flex flex-col font-semibold text-lg hover:cursor-pointer  my-1">
            <div className="hover:bg-gray-800">Newest</div>
            <div className="hover:bg-gray-800">Oldest</div>
          </div>
          <div className="w-full text-sky-500 font-bold text-2xl p-1 border-b-4">
            Series Type
          </div>
          <div className="flex flex-col font-semibold text-lg  hover:cursor-pointer my-1">
            <div className="hover:bg-gray-800">Novel</div>
            <div className="hover:bg-gray-800">Manga</div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-700">
          {/* per div */}
          <div className=" m-4">
            <div className="flex flex-row gap-3 mb-4">
              <input
                type="text"
                className="w-full py-3 px-4 rounded-lg"
                placeholder="Search series.."
              />
              <button className="bg-sky-500 hover:bg-blue-500 rounded-md p-3 font-bold">
                SEARCH
              </button>
            </div>

            <CardLarge />
            <CardLarge />
            <CardLarge />
            <CardLarge />
            <CardLarge />
          </div>
        </div>
      </div>
    </main>
  );
}
