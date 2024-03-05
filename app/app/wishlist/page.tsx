import { CardMedium } from "../../components/card-med";

export default function Wishlist() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className="grid">
        <div className="col-span-4 bg-gray-700 ">
          {/* per div */}
          <div className=" m-4">
            <div className="flex justify-center">
              <div className="text-blue-500 font-bold text-5xl">WISHLIST</div>
            </div>
            <div className="grid gap-4 grid-cols-5 grid-rows-1 px-5">
              <CardMedium />
              <CardMedium />
              <CardMedium />
              <CardMedium />
              <CardMedium />
              <CardMedium />
              <CardMedium />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
