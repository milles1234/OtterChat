import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { username, display_name } = await request.json()

    // Validate input
    if (!username || !display_name) {
      return NextResponse.json(
        { error: "Username and display name are required" },
        { status: 400 }
      )
    }

    // Check if username is unique
    const existingUser = await prisma.users.findUnique({
      where: { username }
    })

    if (existingUser && existingUser.id !== session.user.id) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 400 }
      )
    }

    // Update user
    const updatedUser = await prisma.users.update({
      where: { id: session.user.id },
      data: {
        username,
        display_name,
      }
    })

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error("Onboarding error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}