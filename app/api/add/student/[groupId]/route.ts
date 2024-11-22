import { data } from "@/app/api/data";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
  params: { groupId: number };
}

export async function POST(request: NextRequest, context: Context) {
  const { groupId } = context.params;
  const body: any = await request.json();
  const x = data.groups.find((elm) => elm.id == groupId);
  if (x) {
    x.students.push({ ...body });
    return NextResponse.json(data.groups.map((elm) => elm.students).flat());
  } else {
    return NextResponse.json({ message: "group not found" });
  }
}
