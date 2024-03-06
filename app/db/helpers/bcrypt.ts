import bcryptjs from "bcryptjs";

export const hashPass = (pass: string): string => bcryptjs.hashSync(pass);
export const comparePass = (pass: string, hash: string): boolean =>
  bcryptjs.compareSync(pass, hash);
