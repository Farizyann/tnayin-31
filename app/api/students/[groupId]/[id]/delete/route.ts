import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { data } from "../../../../data";

interface Context {
  params: { id: number; groupId: number };
}

export async function DELETE(request: NextRequest, context: Context) {
  const { id, groupId } = context.params;
  const x = data.groups.find((elm) => elm.id == groupId);
  if (x) {
    const y = x.students.find((elm) => elm.id == id);
    if (y) {
      x.students = [...x.students.filter((elm) => elm.id != id)];
      return NextResponse.json(true);
    } else {
      return NextResponse.json(false);
    }
  } else {
    return NextResponse.json(false);
  }
}
