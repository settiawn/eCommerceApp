import jwt, { JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export const createToken = (payload: JwtPayload) => {
  return jwt.sign(payload, secret);
};
