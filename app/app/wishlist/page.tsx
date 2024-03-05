import { Card } from "../card";
import { CardSearch } from "../cardSearch";

export default function Wishlist() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-slate-500 grid">
        <div className="col-span-4 bg-cyan-300">
          {/* per div */}
          <div className=" m-4">
            <div className="flex justify-center gap-3 mb-4">
              <div className="bg-blue-300 font-bold text-4xl">WISHLIST</div>
            </div>
            <div className="flex flex-row gap-3 mb-4">
              <input
                type="text"
                className="w-full py-3 px-4"
                placeholder="Search series.."
              />
              <button className="bg-blue-300 rounded-md p-3 font-bold">
                SEARCH
              </button>
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 p-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
