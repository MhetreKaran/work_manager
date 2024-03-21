import { NextResponse } from "../../../../../../../node_modules/next/server";

export function GET(req,{params}){
    const {userId, postId} = params
    return NextResponse.json(params)
}