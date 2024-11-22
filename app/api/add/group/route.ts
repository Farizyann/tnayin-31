import { data } from "@/app/api/data";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: { id: number };
}

export async function POST(request: NextRequest, context: Context) {
    const body: any = await request.json();
    data.groups.push({...body})
    console.log(data.groups);
    return NextResponse.json(data.groups);
}