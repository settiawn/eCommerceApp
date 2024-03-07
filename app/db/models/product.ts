import { ObjectId } from "mongodb";
import { db } from "../config";
import { SearchOptions } from "@/app/api/products/route";

const productDB = db.collection("Products");

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
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
    console.log(options, "<<<<<< baru dateng");
    if (!options.type) delete options.type;
    if (!options.sort) delete options.sort;
    if (!options.query) delete options.query;
    // -1 => newest
    // 1 => oldest

    const regex = new RegExp(options.query as string, "i");
    console.log(regex);

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

    console.log(agg);

    // const agg = [
    //   {
    //     $sort: {
    //       createdAt: -1,
    //     },
    //   },
    //   {
    //     $match: {
    //       type: "novel",
    //     },
    //   },
    //   {
    //     $match: {
    //       name: regex,
    //     },
    //   },
    // ];

    // console.log(agg);

    return (await productDB.aggregate(agg).toArray()) as Product[];
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
