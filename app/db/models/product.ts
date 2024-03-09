import { ObjectId } from "mongodb";
import { db } from "../config";
import { SearchOptions } from "@/app/api/products/route";
import { Meta, ServerResponse } from "../helpers/type";

const productDB = db.collection("Products");

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
  type: string;
  author: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export class ProductModel {
  static async findAllProducts(options: SearchOptions) {
    if (!options.type) delete options.type;
    if (!options.sort) delete options.sort;
    if (!options.query) delete options.query;
    if (!options.page) delete options.page;
    // if (!options.limit) delete options.limit;
    // -1 => newest
    // 1 => oldest

    const regex = new RegExp(options.query as string, "i");

    const agg = [];

    if (options.type) {
      agg.unshift({
        $match: {
          type: options.type,
        },
      });
    }

    if (options.query) {
      agg.unshift({
        $match: {
          name: regex,
        },
      });
    }

    if (options.sort) {
      agg.unshift({
        $sort: {
          createdAt: +options.sort,
        },
      });
    }

    // if (options.limit) {
    //   return (await productDB
    //     .aggregate(agg)
    //     .limit(+options.limit)
    //     .toArray()) as Product[];
    // }

    const totalProducts = await productDB.count();
    const dataPerPage = 5;
    const totalPage = Math.floor(totalProducts / dataPerPage);
    let skippedData: number = 0;

    if (Number(options.page) >= 2) {
      skippedData = dataPerPage * (Number(options.page) - 1);
    }

    const result = (await productDB
      .aggregate(agg)
      .skip(skippedData)
      .limit(dataPerPage)
      .toArray()) as Product[];

    return <ServerResponse<Product[]>>{
      data: result,
      meta: {
        currentPage: Number(options.page),
        totalPage,
        dataPerPage,
        totalData: totalProducts,
      },
    };
    // return (await productDB.find().toArray()) as Product[];
  }

  static async searchProducts(options: SearchOptions) {
    console.log(options, "<<<<<< baru dateng");
    if (!options.type) delete options.type;
    if (!options.sort) delete options.sort;
    // -1 => newest
    // 1 => oldest

    return (await productDB.find().toArray()) as Product[];
  }

  static async findProductBySlug(slug: string) {
    return (await productDB.findOne({ slug })) as Product;
  }

  static async findProductById(id: string) {
    return (await productDB.findOne({ _id: new ObjectId(id) })) as Product;
  }
}
