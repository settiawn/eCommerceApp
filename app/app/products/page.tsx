"use client";
import { useEffect, useState } from "react";
import { CardLarge } from "../../components/card-lg";
import { Product } from "@/db/models/product";

export default function Products() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getNewest();
  }, []);

  const getNewest = async () => {
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
    setData(recentProduct);
  };

  const getOldest = async () => {
    const responseRecentProducts = await fetch(
      "http://localhost:3000/api/products?sort=1&limit=5",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: recentProduct } = await responseRecentProducts.json();
    setData(recentProduct);
  };

  const getNovel = async () => {
    const responseRecentProducts = await fetch(
      "http://localhost:3000/api/products?sort=-1&type=novel&limit=5",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: recentProduct } = await responseRecentProducts.json();
    setData(recentProduct);
  };

  const getManga = async () => {
    const responseRecentProducts = await fetch(
      "http://localhost:3000/api/products?sort=-1&type=manga&limit=5",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: recentProduct } = await responseRecentProducts.json();
    setData(recentProduct);
  };

  const getSearch = async (input: string) => {
    const responseRecentProducts = await fetch(
      "http://localhost:3000/api/products?sort=-1&query=" + input,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data: recentProduct } = await responseRecentProducts.json();
    setData(recentProduct);
  };

  return (
    <main className="container flex mx-auto flex-col">
      <div className=" bg-gray-700 grid">
        <div className="col-span-5 bg-blue-300"></div>
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
            {data.map((x: Product) => (
              <CardLarge product={x} key={x.slug} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
