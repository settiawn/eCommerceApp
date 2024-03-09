import { Product } from "@/db/models/product";
import Link from "next/link";

export interface ProductCardProps {
  product: Product;
}

export function CardMedium({ product }: ProductCardProps) {
  return (
    <>
      <div className="flex flex-col hover:cursor-pointer hover:text-blue-500 text-center">
        <div className="rounded-lg overflow-hidden shadow-lg mt-8 bg-white relative px-0 p-0 h-[260px]">
          <div className="flex items-center">
            <div className="">
              <img src={product.thumbnail} alt="cover_art" className="" />
            </div>
          </div>
          <div className="flex absolute bottom-0 w-full text-white">
            <div className="w-full bg-green-500 font-bold p-2">
              {product.type}
            </div>
          </div>
        </div>
        <div className="w-full p-1 mt-2 font-semibold line-clamp-2">
          <Link href={"/products/" + product.slug}>{product.name}</Link>
        </div>
        <div className="text-center font-normal text-sm mt-1">
          {product.author}
        </div>
      </div>
    </>
  );
}
