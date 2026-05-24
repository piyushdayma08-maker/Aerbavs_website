import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentPath = path.join(process.cwd(), "data", "content.json");

function readContent() {
  const raw = fs.readFileSync(contentPath, "utf-8");
  return JSON.parse(raw);
}

function writeContent(data: unknown) {
  fs.writeFileSync(contentPath, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  try {
    const content = readContent();
    return NextResponse.json(content);
  } catch {
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = request.headers.get("cookie");
    if (!session?.includes("admin_session")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const current = readContent();
    const updated = { ...current, ...body };
    writeContent(updated);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}
