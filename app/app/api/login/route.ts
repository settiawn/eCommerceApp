import { comparePass } from "@/db/helpers/bcrypt";
import { createToken } from "@/db/helpers/jwt";
import { ServerResponse } from "@/db/helpers/type";
import { UserModel } from "@/db/models/user";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await UserModel.findUserByEmail(body.email);
    if (!user) {
      return NextResponse.json(
        {
          error: "wrong email/password",
        },
        {
          status: 401,
        }
      );
    }

    const checkPassword: boolean = comparePass(body.password, user.password);
    if (!checkPassword) {
      return NextResponse.json(
        {
          error: "wrong email/password",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken: string = createToken({
      _id: user._id,
      email: user.email,
    });

    cookies().set({
      name: "Authorization",
      value: `Bearer ${accessToken}`,
    });

    return NextResponse.json<ServerResponse<{ accessToken: string }>>({
      message: "Success log in",
      data: { accessToken },
    });
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
