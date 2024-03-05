import { CardSearch } from "../../components/cardSearch";

export default function Products() {
  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-slate-500 grid">
        <div className="col-span-5 bg-blue-300"></div>
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
        <div className="col-span-4 bg-cyan-300">
          {/* per div */}
          <div className=" m-4">
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

            <CardSearch />
            <CardSearch />
            <CardSearch />
            <CardSearch />
            <CardSearch />
          </div>
        </div>
      </div>
    </main>
  );
}
