import { auth, currentUser } from '@clerk/nextjs'
import React from 'react'
import BlogForm from './components/AddForm';
import ConnectDb from '../libs/ConnectDb';
import CategoryModel from '../models/CategoryModel';
import { NextResponse } from 'next/server';


const getCategory = async () => {
  await ConnectDb();
  const res = await CategoryModel.find({});
  return NextResponse.json({res});

}

export default async function page() {
    const {userId} = auth();
    const user =await currentUser();
    const cat = await getCategory();
    const category = await cat.json();
    // console.log(category.res);



   return (
    <div>This is {userId} dashboard. Hey {user.firstName}
    
    
    <BlogForm category ={category}/>
     </div>
  )
}
