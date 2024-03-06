import { ServerResponse } from "@/db/helpers/type";
import { User, UserModel } from "@/db/models/user";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await UserModel.createUser(body);

    return NextResponse.json<ServerResponse<User>>({ message: "User has been created", data: data });
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      const err = error.issues[0].path + " " + error.issues[0].message;
      return NextResponse.json(
        {
          error: err,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
