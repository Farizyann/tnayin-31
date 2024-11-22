import { data } from "@/app/api/data";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
  params: { id: number; groupId: number };
}

export async function PATCH(request: NextRequest, context: Context) {
  const { id, groupId } = context.params;
  const body: any = await request.json();
  const x = data.groups.find((elm) => elm.id == groupId);
  if (x) {
    const y:any = x.students.find((elm) => elm.id == id);
    const yIndex: any = x.students.findIndex((elm) => elm.id == id);
    if (y) {
      for (let key in body) {
        y[key] = body[key];
      }
      x.students[yIndex] = y;
      return NextResponse.json(y);
    } else {
      return NextResponse.json({ message: "studets not found" });
    }
  } else {
    return NextResponse.json({ message: "group not found" });
  }
}
