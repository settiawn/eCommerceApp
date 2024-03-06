import { ObjectId } from "mongodb";
import { db } from "../config";
const userDB = db.collection("Users");

type User = {
    _id: ObjectId,
    name: string,
    username: string,
    email: string,
    password: string
}

export class UserModel {
    static async findAllUsers(){
        return (await userDB.find().toArray() as User[])
    }
}