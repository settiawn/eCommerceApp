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

  static async findById(wishlistId: string) {
    return (await wishlistDB.findOne({
      _id: new ObjectId(String(wishlistId)),
    })) as Wishlist;
  }

  static async addToWishlist(productId: ObjectId, userId: ObjectId) {
    try {
      const data = await this.findAllWishlist(userId);
      const validate = data.filter(
        (x) => x.productId.toString() === productId.toString()
      );

      if (validate.length > 0)
        throw new Error("You already have this series on your wishlist");

      await wishlistDB.insertOne({
        userId: userId,
        productId: productId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

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
