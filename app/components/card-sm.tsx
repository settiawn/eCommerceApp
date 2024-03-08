import { ProductCardProps } from "./card-med";

export function CardSmall({ product }: ProductCardProps) {
  return (
    <div className="my-1 flex hover:cursor-pointer hover:text-blue-500">
      <div className="flex-none w-28 relative text-center p-1">
        <img
          src={product.images[product.images.length - 1]}
          alt="image not found 404"
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 px-1">
        <div className="font-bold w-72">
          {product.name}
        </div>
        <div className="py-2 text-white">{product.author}</div>
      </div>
    </div>
  );
}
