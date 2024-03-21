import { User } from "@/models/user";
import { NextResponse } from "next/server";

// get single user
export async function GET(request,{ params }) {
    console.log(params);
  try {
    const { userId } = params;
    const user = await User.findById(userId);
    return NextResponse.json(user);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "getting error !!",
    });
 }
}

//update user
export async function PUT(request,{params}){
    const { userId } = params;
    const { name, password, about, profileURL } = await request.json();
    try {
        const user = await User.findById(userId);
        user.name = name;
        user.about = about;
        user.password = password;  
        user.profileURL = profileURL;

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({
            message:'failed to update user !!',
            success: false 
        })
    }
     
}

// delete single user
export async function DELETE(request,{ params }) {
  console.log("params", params);
  const { userId } = params;

  try {
    User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deleting user !!",
      success: false,
    });
  }
}
