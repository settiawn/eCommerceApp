import { addWishlist } from "@/actions/wishlist";
import AddToWishlistButton from "@/components/bt-add-wishlist";
import { MiniCard } from "@/components/card-mini";
import { Tag } from "@/components/tag";
import { Product } from "@/db/models/product";

//seo metadata
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await fetchDataBySlug(slug);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.thumbnail || ""],
    },
  };
}

async function fetchDataBySlug(slug: string) {
  const response = await fetch("http://localhost:3000/api/products/" + slug, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error!");
  }
  const { data }: { data: Product } = await response.json();
  return data;
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetchDataBySlug(params.slug);

  return (
    <main className="container flex mx-auto flex-col">
      <div className="grid">
        <div className="col-span-5 bg-blue-300">
          <div className="flex h-screen rounded overflow-hidden shadow-lg bg-slate-600 relative px-0 p-0 justify-center content-center">
            <div className="flex items-center">
              <img
                src={data.thumbnail}
                alt="cover_art"
                className="blur-sm opacity-90"
              />
            </div>
            <div className="absolute flex top-20">
              <div className="col-span-1 ml-5 rounded-l">
                <div className="flex-none w-96 relative text-center mr-2">
                  <img
                    src={data.thumbnail}
                    alt="image not found 404"
                    className="rounded-sm"
                  />
                  <div className="flex justify-between absolute bottom-0 w-full">
                    <div className="w-full bg-sky-500 font-bold p-3 text-white hover:cursor-pointer hover:bg-blue-500 rounded-b-sm">
                      <AddToWishlistButton slug={data.slug} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 bg-gray-700 mr-5 rounded-r shadow-2xl">
                {/* metadata */}
                <div className="flex-1 m-5">
                  <div className="text-3xl mb-3 font-bold">{data.name}</div>
                  <div className="text-1xl mb-3 font-bold">{data.author}</div>
                  <div className="flex flex-row gap-1 my-6 font-bold">
                    {/* ini tags jadiin komponen ajah */}
                    {data.tags.map((x: string, i: number) => (
                      <Tag tag={x} key={i} />
                    ))}
                  </div>
                  <div className="font-normal my-5">{data.description}</div>
                </div>

                {/* images */}
                <div className="grid gap-4 grid-cols-6 grid-rows-1 px-5 mb-8">
                  {/* col 6 biar pas 240px */}
                  {/* bikin komponen image */}
                  {data.images.map((x: string, i: number) => (
                    <MiniCard img={x} vol={i} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
