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
  static async findAllWishlist(userId: ObjectId) {
    //tambah agg
    return (await wishlistDB.find({ userId }).toArray()) as Wishlist[];
  }

  static async findById(wishlistId: ObjectId) {
    return (await wishlistDB.findOne({ _id: wishlistId })) as Wishlist;
  }

  static async addToWishlist(productId: ObjectId, userId: ObjectId) {
    // userId masih hardcode
    await wishlistDB.insertOne({
      userId: userId,
      productId: productId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return "added to wishlist";
  }

  static async deleteWishlist(wishlistId: ObjectId) {
    await wishlistDB.deleteOne({
      _id: wishlistId,
    });

    return "wishlist deleted";
  }
}
