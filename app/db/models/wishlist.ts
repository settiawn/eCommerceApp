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
    const data = await this.findAllWishlist(userId);

    const validate = data.filter(
      (x) => x.productId.toString() === productId.toString()
    );
    // console.log(validate);

    if (validate.length > 0) throw new Error("error bg");

    await wishlistDB.insertOne({
      userId: userId,
      productId: productId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return null;
  }

  static async deleteWishlist(wishlistId: ObjectId) {
    await wishlistDB.deleteOne({
      _id: wishlistId,
    });
    return null;
  }
}
