import { Product } from "@/db/models/product";
import Link from "next/link";
import { ProductCardProps } from "./card-med";
import { removeWishlist } from "@/actions/wishlist";
import { Wishlist } from "@/db/models/wishlist";
import { WishlistDetail } from "@/app/wishlist/page";

interface WishlistCardProps {
  wishlist: WishlistDetail;
}

export function CardWishlist({ wishlist }: WishlistCardProps) {
  console.log(typeof wishlist._id);

  return (
    <>
      <div className="flex flex-col hover:cursor-pointer hover:text-blue-500 text-center">
        <div className="rounded-lg overflow-hidden shadow-lg mt-8 bg-white relative px-0 p-0 h-[260px]">
          <div className="flex items-center">
            <div className="">
              <img
                src={wishlist.ProductDetails.thumbnail}
                alt="cover_art"
                className=""
              />
            </div>
          </div>
          <div className="flex absolute bottom-0 w-full text-white">
            <div className="w-full bg-green-500 font-bold p-2">
              {wishlist.ProductDetails.type}
            </div>
          </div>
          <div className="flex absolute top-0 w-full">
            <div
              className="w-full bg-red-500 text-white hover:bg-red-700 font-bold p-2"
              onClick={() => {
                removeWishlist(String(wishlist._id));
              }}
            >
              REMOVE WISHLIST
            </div>
          </div>
        </div>
        <div className="w-full p-1 mt-2 font-semibold line-clamp-2">
          <Link href={"/products/" + wishlist.ProductDetails.slug}>
            {wishlist.ProductDetails.name}
          </Link>
        </div>
        <div className="text-center font-normal text-sm mt-1">
          {wishlist.ProductDetails.author}
        </div>
      </div>
    </>
  );
}
