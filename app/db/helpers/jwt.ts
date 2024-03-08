import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const secret = process.env.JWT_SECRET as string;

export const createToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secret);
};

// export const decodeToken = (token: string) => jwt.verify(token, secret);

export const decodeToken = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(secret);
  const payload = await jose.jwtVerify<T>(token, secretKey);
  return payload.payload;
};
