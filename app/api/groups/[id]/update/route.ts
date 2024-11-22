import { data } from "@/app/api/data";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: { id: number };
}

export async function PATCH(request: NextRequest, context: Context) {
    const { id } = context.params;
    const body: any = await request.json();
    const x:any = data.groups.find(elm => elm.id == id)
    const xIndex:any = data.groups.findIndex(elm => elm.id == id)
    if(x){
        for(let key in body){
            x[key] = body[key]
        }
        data.groups[xIndex] = x;
        return NextResponse.json(x);
    }else{
        return NextResponse.json({message: 'group not found'});
    }
}