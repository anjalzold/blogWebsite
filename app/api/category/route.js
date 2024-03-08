import ConnectDb from "@/app/libs/ConnectDb";
import CategoryModel from "@/app/models/CategoryModel";
import { NextResponse } from "next/server";

export async function GET(){
    await ConnectDb();
    const result = await CategoryModel.find();
    if(result){
        return NextResponse.json({result})
    }
    return NextResponse.json({message:'No categories found'})
}

export async function POST(req,res){
    await ConnectDb();
    const {name} = await req.json();
    const response = await CategoryModel.create({name});
    if(response){
        return NextResponse.json({message:'Category created successfully'})
    }
    return NextResponse.json({message:'Category not created successfully'})
}

    