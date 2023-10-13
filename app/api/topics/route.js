import connectDB from "@/libs/db";
import Topic from "@/models/Topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json(
    {
      success: true,
      message: "Topic has been created sucessfullly",
    },
    { status: 201 }
  );
}

export async function GET() {
  await connectDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE() {
  const id = request.nextUrl.searchParams.get("id"); //eqv to req.query.id
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    message: "Topic has been deleted successfully",
  });
}
