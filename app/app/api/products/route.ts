import { ServerResponse } from "@/db/helpers/type";
import { Product, ProductModel } from "@/db/models/product";
import { NextResponse } from "next/server";

export type SearchOptions = {
  query?: string;
  sort?: string;
  type?: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get("sort");
  const type = searchParams.get("type");
  const query = searchParams.get("query");

  const options = {
    query,
    sort,
    type,
  };

  const data = await ProductModel.findAllProducts(options as SearchOptions);

  return NextResponse.json<ServerResponse<Product[]>>({ data });
}
