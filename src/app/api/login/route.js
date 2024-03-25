import { User } from "@/models/user";
import { NextResponse } from "../../../../node_modules/next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(request) {
  const { email, password } = await request.json();
  try {
    // 1. get user 
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user === null) {
      throw new Error("User is not found, email is not correct.");
    }
    // 2. match password
    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatch) {
      throw new Error("User password is not correct.");
    }
    // 3. generate token
   const token = jwt.sign({
        _id:user._id,
        name: user.name
    },process.env.JWT_KEY);
    console.log(token);
    const response= NextResponse.json(
      {
        message: "login success",
      },
      { status: 200 }
    );
    response.cookies.set("authToken",token,{expiresIn:"1d",httpOnly:true})
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 404 }
    );
  }
}
