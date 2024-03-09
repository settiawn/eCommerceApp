"use client";
import { useEffect, useState } from "react";
import { CardLarge } from "../../components/card-lg";
import { Product } from "@/db/models/product";
import InfiniteScroll from "react-infinite-scroll-component";
import { ErrHandler } from "@/components/error-handler";

export default function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);



  useEffect(() => {
    getNewest();
  }, []);

  const getNewest = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/products?sort=-1&page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: products, meta } = await response.json();

    setCurrentPage(meta.currentPage);
    setTotalPage(meta.totalPage);
    setDataLength(meta.totalData);
    setData(products);
  };

  const fetchMoreDataNewest = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/products?sort=-1&page=" + (currentPage + 1),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: recentProduct, meta } = await response.json();

    setTimeout(() => {
      setCurrentPage(meta.currentPage);
      const combinedData = [...data, ...recentProduct];
      if (currentPage > totalPage) {
        setHasMore(false);
      }
      setData(combinedData);
    }, 1500);
  };

  const getOldest = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/products?sort=1&page=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: products, meta } = await response.json();

    setCurrentPage(meta.currentPage);
    setTotalPage(meta.totalPage);
    setDataLength(meta.totalData);
    setData(products);
  };

  const getNovel = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/products?sort=1&page=1&type=novel",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: products, meta } = await response.json();

    setCurrentPage(meta.currentPage);
    setTotalPage(meta.totalPage);
    setDataLength(meta.totalData);
    setData(products);
  };

  const getManga = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/products?sort=1&page=1&type=manga",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: products, meta } = await response.json();

    setCurrentPage(meta.currentPage);
    setTotalPage(meta.totalPage);
    setDataLength(meta.totalData);
    setData(products);
  };

  const getSearch = async (input: string) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/products?sort=1&page=1&query=" + input,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: products, meta } = await response.json();

    setCurrentPage(meta.currentPage);
    setTotalPage(meta.totalPage);
    setDataLength(meta.totalData);
    setData(products);
  };

  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-gray-700 grid">
        <div className="col-span-5">
          {/* //errordisini */}
          <ErrHandler/>
          <div className="pl-1">
            infinite scroll properly jalan di url sort to 'latest' // default kebuka pas page ini di load. (developernya males nge-adjust 1-1 per type and so on)
          </div>
        </div>
        <div className="col-span-1 bg-gray-700 py-1 px-3">
          <div className="w-full text-sky-500 font-bold text-2xl p-1 border-b-4">
            Sort By
          </div>
          <div className="flex flex-col font-semibold text-lg hover:cursor-pointer  my-1">
            <div className="hover:bg-gray-800" onClick={getNewest}>
              Newest
            </div>
            <div className="hover:bg-gray-800" onClick={getOldest}>
              Oldest
            </div>
          </div>
          <div className="w-full text-sky-500 font-bold text-2xl p-1 border-b-4">
            Series Type
          </div>
          <div className="flex flex-col font-semibold text-lg  hover:cursor-pointer my-1">
            <div className="hover:bg-gray-800" onClick={getNovel}>
              Novel
            </div>
            <div className="hover:bg-gray-800" onClick={getManga}>
              Manga
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-700">
          {/* per div */}
          <div className=" m-4">
            <div className="flex flex-row gap-3 mb-4">
              <input
                type="text"
                className="w-full py-3 px-4 rounded-lg text-black"
                placeholder="Search series.."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="bg-sky-500 hover:bg-blue-500 rounded-md p-3 font-bold"
                onClick={() => {
                  getSearch(searchInput);
                }}
              >
                SEARCH
              </button>
            </div>

            <InfiniteScroll
              dataLength={data.length}
              next={fetchMoreDataNewest}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={<h4>End of the list</h4>}
            >
              {data.map((x: Product) => (
                <CardLarge product={x} key={x.slug} />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </main>
  );
}
