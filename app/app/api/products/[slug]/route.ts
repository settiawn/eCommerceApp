import { ServerResponse } from "@/db/helpers/type";
import { Product, ProductModel } from "@/db/models/product";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const data = await ProductModel.findProductBySlug(slug);
  if (!data) {
    return NextResponse.json<ServerResponse<[]>>(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json<ServerResponse<Product>>({ data });
}