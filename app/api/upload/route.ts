import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get("image") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = Date.now() + "-" + file.name.replaceAll(" ", "_")
  const filepath = path.join(process.cwd(), "public/uploads", filename)

  try {
    await writeFile(filepath, buffer)
    return NextResponse.json({ success: true, filename })
  } catch (error) {
    console.error("Error saving file:", error)
    return NextResponse.json({ error: "Failed to save file" }, { status: 500 })
  }
}

