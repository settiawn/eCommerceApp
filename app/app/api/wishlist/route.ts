import { ServerResponse } from "@/db/helpers/type";
import { Product, ProductModel } from "@/db/models/product";
import { Wishlist, WishlistModel } from "@/db/models/wishlist";
import { error } from "console";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userId = request.headers.get("x-id-user") ?? ("" as string);
    console.log(body, userId, "<Dari server");

    const data = await ProductModel.findProductBySlug(body.slug);
    if (!data) {
      return NextResponse.json<ServerResponse<[]>>(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    await WishlistModel.addToWishlist(data._id, new ObjectId(userId));

    console.log("OK from controller");

    return NextResponse.json<ServerResponse<string>>(
      { message: "Added to wishlist" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    
    if (error === "DuplicateWishlist") {
      return NextResponse.json(
        {
          error: "Already have this series in wishlist",
        },
        {
          status: 403,
        }
      );
    }

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

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const userId = request.headers.get("x-id-user") ?? ("" as string);
    const data = await WishlistModel.findById(
      new ObjectId(String(body.wishlistId))
    );
    if (!data) throw error;
    if (data.userId.toString() !== userId) throw error;

    await WishlistModel.deleteWishlist(new ObjectId(String(body.wishlistId)));

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
  const data = await WishlistModel.findAllWishlist(
    new ObjectId(String(userId))
  );
  return NextResponse.json<ServerResponse<Wishlist[]>>({ data });
}
