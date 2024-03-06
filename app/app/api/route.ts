import { ServerResponse } from "@/db/helpers/type";
import { User, UserModel } from "@/db/models/user";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await UserModel.findAllUsers();
  return NextResponse.json<ServerResponse<User[]>>({ data });
}
