import { checkUser } from "@/lib/checkUser";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await checkUser();
    if (!user) {
      return NextResponse.json({ message: "No user logged in" }, { status: 401 });
    }
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error in check-user API:", error.message);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}