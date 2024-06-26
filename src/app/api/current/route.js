import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { User } from "@/models/user";

export async function GET(request){
    const authToken = request.cookies.get("authToken")?.value;
    console.log(authToken);
    const data = jwt.verify(authToken,process.env.JWT_KEY);
    console.log(data);
    const user = await User.findById(data._id);
    return NextResponse.json(user);
}