import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { data } from "../../../data";

interface Context {
  params: { id: number; groupId: number };
}

export async function GET(request: NextRequest, context: Context) {
  const { id, groupId } = context.params;
  const x = data.groups.find((elm) => elm.id == groupId);
  if (x) {
    const y = x.students.find((elm) => elm.id == id);
    if (y) {
      return NextResponse.json(y);
    } else {
      return NextResponse.json({ message: "studets not found" });
    }
  } else {
    return NextResponse.json({ message: "group not found" });
  }
}
