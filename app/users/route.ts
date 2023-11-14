import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json ({
    message: "Hello, Trello!"
  })
}

export function POST() {
  return NextResponse.json ({
    message: "Hello, Trello!"
  })
}
