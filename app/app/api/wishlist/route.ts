import { ServerResponse } from "@/db/helpers/type";
import { Product, ProductModel } from "@/db/models/product";
import { Wishlist, WishlistModel } from "@/db/models/wishlist";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const userId = request.headers.get("x-id-user") ?? ("" as string);
  const data = await ProductModel.findProductBySlug(body.slug);
  if (!data) {
    return NextResponse.json<ServerResponse<[]>>(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  await WishlistModel.addToWishlist(data._id, new ObjectId(userId));

  return NextResponse.json<ServerResponse<string>>(
    { message: "Added to wishlist" },
    { status: 201 }
  );
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    const data = await WishlistModel.findById(
      new ObjectId(String(body.wishlistId))
    );

    await WishlistModel.deleteWishlist(data._id);

    return NextResponse.json<ServerResponse<string>>({
      message: "Wishlist has been deleted",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request: Request) {
  const userId = request.headers.get("x-id-user") ?? ("" as string);
  const data = await WishlistModel.findAllWishlist(new ObjectId(String(userId)));

  return NextResponse.json<ServerResponse<Wishlist[]>>({ data });
}
