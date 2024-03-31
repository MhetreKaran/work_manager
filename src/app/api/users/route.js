import { User } from "@/models/user";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

export async function GET() {
  let users = [];
  try {
    users = await User.find().select("-password");
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        message: "failed to get users",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
  return NextResponse.json(users);
}

export async function POST(request) {
  //fetch user details from request
  const { name, email, password, about, profileURL } = await request.json();
  const user = new User({ name, email, password, about, profileURL });
  try {
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
    console.log("bcrypted password", user.password);  
    // save to object to database
    const createUser = await user.save();
    const response = NextResponse.json(createUser, { status: 201 });
    return response;
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "Failed to create user !!",
      status: false,
    });
  }
}
