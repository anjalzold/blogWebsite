import ConnectDb from "@/app/libs/ConnectDb";
import Blog from "@/app/models/BlogModel";
import CategoryModel from "@/app/models/CategoryModel";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req,res){
    await ConnectDb();

 
    
    const {title,description,image,category} = await req.json();
    // console.log(req.json())
    const { userId } = auth();


        if (!title || !description || !image || !userId,!category) {
          return NextResponse.json({ message: "Missing required fields" });
        }
        try{

             const response = Blog.create({
               title,
               description,
               image,
               userId,
               category
             });
             if (response) {
               return NextResponse.json({
                 message: "Blog created successfully",
               });
             }
             return NextResponse.json({
               message: "Blog not created successfully",
               response,
             });
        }catch(e){
            console.log(e)
        }
   
}

export async function GET(){
const {userId} = auth();
    console.log(userId)
    await ConnectDb();
    const result =await Blog.find();
              console.log(result);
        return NextResponse.json({result})
}

