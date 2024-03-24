import { NextResponse } from "next/server";
import { Task } from "../../../models/task";

// get all the tasks
export async function GET() {
    try {
       let tasks = [];
       tasks = await Task.find();
       return NextResponse.json({tasks}) 
    } catch (error) {
        return NextResponse.json({
            message:"failed to gets tasks",
            success: false
        })
    }
}

// create the tasks
export async function POST(request) {
  const { title, content, userId } = await request.json();
  try {
    const task = new Task({
      title,
      content,
      // userId,
    });
    console.log(task);
    const createTask = await task.save();
    return NextResponse.json(createTask,{status:201})
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:'Failed to create Task !!',
        status:false
    })
  }
}
