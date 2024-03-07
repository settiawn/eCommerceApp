import Link from "next/link";
import { ProductCardProps } from "./card-med";
import { Tag } from "./tag";

export function CardLarge({ product }: ProductCardProps) {
  return (
    <div className="border p-2 my-1 font-bold flex rounded-lg relative">
      <div className="flex-none w-60 relative text-center hover:opacity-80 hover:cursor-pointer">
        <img
          src={product.thumbnail}
          alt="image not found 404"
          className="rounded-lg"
        />
        <div className="flex justify-between absolute bottom-0 w-full">
          <div className="rounded-b-lg w-full bg-green-500 font-bold p-3 text-white hover:cursor-pointer">
            {product.type}
          </div>
        </div>
      </div>
      <div className="flex-1 mx-5">
        <div className="text-3xl mb-3 hover:cursor-pointer hover:text-blue-500">
          <Link href={"/products/" + product.slug}>{product.name}</Link>
        </div>
        <div className="flex flex-row gap-1 my-2">
          {/* ini tags jadiin komponen ajah */}
          {product.tags.map((x: string, i: number) => (
            <Tag tag={x} key={i} />
          ))}
        </div>
        <div className="font-normal">{product.excerpt}</div>
      </div>
      <div className="flex justify-between absolute bottom-0 right-0">
        <div className="rounded-br-lg w-full bg-sky-500 font-bold p-3 text-white hover:cursor-pointer hover:bg-blue-500">
          ADD TO WISHLIST
        </div>
      </div>
    </div>
  );
}
