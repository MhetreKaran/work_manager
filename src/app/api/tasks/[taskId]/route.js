import { Task } from "@/models/task";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  try {
    const { taskId } = params;
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ message: "task was not found", status: false });
  }
}
export async function PUT(request,{params}) {
    const {taskId}= params;
    const {title,content,status} = await request.json();
    console.log('task id',params,title,content,status);
    try {
       
        const task = await Task.findById(taskId);
        console.log('task',task);
        task.title = title;
        task.content = content;
        task.status = status;
        const updatedTask = await task.save();
        console.log('updated task',updatedTask);
        return NextResponse.json(updatedTask);
    } catch (error) {
        return NextResponse.json({
            message:'Failed task not updated',
            success:false
        });
    }
}
export async function DELETE(request,{params}) {
    try {
        const {taskId} = params;
        await Task.deleteOne({_id:taskId});
        return NextResponse.json({
            message: "task deleted successfully !!",
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        })
    }
}
