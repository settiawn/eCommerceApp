import { ObjectId } from "mongodb";
import { db } from "../config";

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
  static async findAllProducts() {
    return (await productDB.find().toArray()) as Product[];
  }

  static async findProductBySlug(slug: string) {
    return (await productDB.findOne({ slug })) as Product;
  }

  static async findProductById(id: string) {
    return (await productDB.findOne({ _id: new ObjectId(id) })) as Product;
  }
}
