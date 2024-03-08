"use client";
import { useEffect, useState } from "react";
import { CardWishlist } from "@/components/card-wishlist";
import { Product } from "@/db/models/product";
import { Wishlist } from "@/db/models/wishlist";

export type WishlistDetail = Partial<Wishlist> & { ProductDetails: Product };

export default function Wishlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const responseRecentProducts = await fetch(
      "http://localhost:3000/api/wishlist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await responseRecentProducts.json();
    setData(data);
  };

  return (
    <main className="container flex mx-auto flex-col">
      <div className="grid">
        <div className="col-span-4 bg-gray-700 ">
          {/* per div */}
          <div className=" m-4">
            <div className="flex justify-center">
              <div className="text-blue-500 font-bold text-5xl">WISHLIST</div>
            </div>
            <div className="grid gap-4 grid-cols-7 grid-rows-1 px-5">
              {data.map((x: WishlistDetail, i: number) => (
                <CardWishlist wishlist={x} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
