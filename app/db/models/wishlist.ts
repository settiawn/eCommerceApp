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
    const agg = [
      {
        $lookup: {
          from: "Products",
          localField: "productId",
          foreignField: "_id",
          as: "ProductDetails",
        },
      },
      {
        $unwind: {
          path: "$ProductDetails",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $match: {
          userId: userId,
        },
      },
    ];
    return (await wishlistDB.aggregate(agg).toArray()) as Wishlist[];
  }

  static async findById(wishlistId: ObjectId) {
    return (await wishlistDB.findOne({ _id: wishlistId })) as Wishlist;
  }

  static async addToWishlist(productId: ObjectId, userId: ObjectId) {
    try {
      console.log(productId, userId, "Dari models");
      
      const data = await this.findAllWishlist(userId);
      const validate = data.filter(
        (x) => x.productId.toString() === productId.toString()
      );
      console.log(validate.length);

      if (validate.length > 0) throw new Error("DuplicateWishlist");

      await wishlistDB.insertOne({
        userId: userId,
        productId: productId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      console.log("OK");
      
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteWishlist(wishlistId: ObjectId) {
    await wishlistDB.deleteOne({
      _id: wishlistId,
    });
    return null;
  }
}
