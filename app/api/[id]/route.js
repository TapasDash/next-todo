import connectDB from "@/libs/db";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

//route:_http://localhost:3000/api/:id
export async function PATCH(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({
    success: true,
    message: "Topic has been updated successfully!",
  });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  const topic = await Topic.findById(id);
  return NextResponse.json({
    success: true,
    topic,
  });
}
