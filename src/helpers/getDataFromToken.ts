import { request } from "http";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodeToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodeToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
