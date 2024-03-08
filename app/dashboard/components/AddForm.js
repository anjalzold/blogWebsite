"use client"

import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import blogSchema from '../libs/FormSchema';
import { useRouter } from 'next/navigation';


function BlogForm(
  {category}
) {
 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(blogSchema),
 });

//  console.log(category.res)



 const router = useRouter();

 const onSubmit = async (data) => {
    console.log('Form data:');
    // console.log(data);
    try{
        const res =await fetch("http://localhost:3000/api/blog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
            body: JSON.stringify(data),
          }); 
          if(res){
                console.log('Blog created successfully')
                router.push('/')
                router.refresh();
          } 
        


    }
    catch(e){
        console.log(e)
    }
    // Here, you would typically send the data to your server
 };

 return (
   <form
     onSubmit={handleSubmit(onSubmit)}
     className='flex w-full h-full items-center justify-center text-black gap-5 flex-col'
   >
     <input {...register("title")} placeholder='Title' />
     {errors.title && <p>{errors.title.message}</p>}

     <input {...register("description")} placeholder='Description' />
     {errors.description && <p>{errors.description.message}</p>}

     <input {...register("image")} placeholder='Image URL' />
     {errors.image && <p>{errors.image.message}</p>}

     <select {...register("category")}>
       {category.res.map(categories => (
         <Fragment key={categories._id}>
           <option value={categories._id}>{categories.name}</option>
         </Fragment>
       ))}
     </select>

     <button type='submit' className='text-white'>
       Submit
     </button>
   </form>
 );
}

export default BlogForm;
