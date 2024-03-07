import { ServerResponse } from "@/db/helpers/type";
import { Product, ProductModel } from "@/db/models/product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await  ProductModel.findAllProducts();
  
  return NextResponse.json<ServerResponse<Product[]>>({ data });
}
