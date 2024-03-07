import { ObjectId } from "mongodb";
import { db } from "../config";

const wishlistDB = db.collection("Wishlists");

export type Wishlist = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: string;
  updatedAt: string;
};

export class WishlistModel {
  //tambah validasi
  static async findAllWishlist() {
    //tambahin agg buat punya users only
    return (await wishlistDB.find().toArray()) as Wishlist[];
  }

  static async addToWishlist(productId: string) {
    // userId masih hardcode
    await wishlistDB.insertOne({ productId: new ObjectId(productId) });
    return "added to wishlist";
  }

  static async deleteWishlist(wishlistId: string) {
    await wishlistDB.deleteOne({
      _id: new ObjectId(wishlistId),
    });
    return "wishlist deleted";
  }
}
