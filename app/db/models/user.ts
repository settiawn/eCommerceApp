import { ObjectId } from "mongodb";
import { db } from "../config";
import bcryptjs from "bcryptjs";
import { z } from "zod";

const userDB = db.collection("Users");

export type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type NewUserInput = Omit<User, "_id">;

const NewUserInputSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export class UserModel {
  static async findAllUsers() {
    return (await userDB.find().toArray()) as User[];
  }

  static async createUser(newUser: NewUserInput) {
    const validation = NewUserInputSchema.safeParse(newUser);
    // console.log(validation);
    if (!validation.success) {
      throw validation.error;
    }
    return await userDB.insertOne({
      ...newUser,
      password: bcryptjs.hashSync(newUser.password),
    });
  }
}
