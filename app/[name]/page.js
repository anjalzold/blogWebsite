import React from 'react'
import ConnectDb from '../libs/ConnectDb';
import CategoryModel from '../models/CategoryModel';
import Blog from "../models/BlogModel";

import { NextResponse } from 'next/server';
import { Img } from '../components/Img';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { Button } from '../components/Button';




export default async function page({params}) {
    
    const {name} = params;

    const getCategory = async () => {
        await ConnectDb();
        const res = await CategoryModel.find({name: name});
        // console.log(res[0]._id);
        const data = await Blog.find({category: res[0]._id});
        return NextResponse.json({data});
      
      }
        const cat = await getCategory();
        const {data} = await cat.json();
        console.log(data)
        // console.log(category.res);

  return (
    <div>
      <div className='flex flex-col items-end justify-start w-[66%] gap-[50px]'>
        <div className='grid grid-cols-3 gap-10 px-10'>
          {data.map(item => (
            <div key={item._id}>
              <div className='flex flex-col items-center justify-start w-full'>
                <div className='flex flex-col items-start justify-start w-full'>
                  <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-start items-center w-[34%] gap-3.5'>
                      <Img
                        src='images/img_ellipse_5.png'
                        alt='circleimage'
                        className='h-[70px] w-[70px] rounded-[50%]'
                      />
                      <div className='flex flex-col items-start justify-start w-[66%] gap-[3px]'>
                        <Heading
                          as='h6'
                          className='!text-blue_gray-600 text-center !font-semibold text-sm'
                        >
                          By Jhone Leonardo
                        </Heading>
                        {/* <Text size='xs' as='p' className='text-center'>
                          12 September, 2020
                        </Text> */}
                      </div>
                    </div>
                    <Text size='xs' as='p' className='text-center'>
                      {/* <span className='text-blue_gray-600'>Category </span> */}
                      <span className='text-pink-300 font-merriweather text-lg font-black'>
                        {name.toUpperCase()}
                      </span>
                    </Text>
                  </div>
                  <Heading
                    size='2xl'
                    as='h1'
                    className='mt-[30px] ml-0.5 tracking-[0.12px] !font-merriweather italic'
                  >
                    {item.title}
                  </Heading>
                  <Img
                    src={item.image}
                    alt='image'
                    className='w-full mt-[29px] ml-0.5 object-cover rounded-[5px] h-[300px]'
                  />
                  <Text
                    as='p'
                    className='mt-[30px] ml-0.5 !text-blue_gray-900 leading-[30px]'
                  >
                    {item.description}
                  </Text>
                  <div className='flex flex-col gap-4 items-center justify-between w-[65%] mt-[19px]'>
                    <div className='flex flex-row justify-start items-center gap-2.5'>
                      <Button
                        color='light_blue_50'
                        size='xl'
                        className='w-[55px] rounded-[27px]'
                      >
                        <Img src='images/img_clock_1.svg' />
                      </Button>
                      <Text
                        size='xs'
                        as='p'
                        className='!text-black-900 text-center'
                      >
                        5 minutes ago
                      </Text>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2.5'>
                      <Button
                        color='lime_50'
                        size='xl'
                        className='w-[55px] rounded-[27px]'
                      >
                        <Img src='images/img_like_1.svg' />
                      </Button>
                      <Text
                        size='xs'
                        as='p'
                        className='!text-black-900 text-center'
                      >
                        12 Like
                      </Text>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2.5'>
                      <Button
                        color='red_50'
                        size='xl'
                        className='w-[55px] rounded-[27px]'
                      >
                        <Img src='images/img_send_1_1.svg' />
                      </Button>
                      <Text
                        size='xs'
                        as='p'
                        className='!text-black-900 text-center'
                      >
                        Share
                      </Text>
                    </div>
                  </div>
                  <Button
                    color='indigo_900_01'
                    size='5xl'
                    shape='round'
                    rightIcon={
                      <Img
                        src='images/img_arrowpointingtoright_1.svg'
                        alt='arrow-pointing-to-right 1'
                      />
                    }
                    className='mt-5 gap-[19px] tracking-[0.12px] font-bold min-w-[255px]'
                  >
                    Continue Reading
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-row justify-end items-center w-[29%] mr-[69px]'>
          <div className='flex flex-col items-center justify-start h-10 w-10'>
            <Text
              as='p'
              className='flex justify-center items-center h-10 w-10 text-white !font-normal bg-indigo-900 text-center rounded-[50%]'
            >
              1
            </Text>
          </div>
          <div className='flex flex-col items-center justify-start h-10 w-10 ml-5'>
            <Text
              as='p'
              className='flex justify-center items-center h-10 w-10 text-indigo-900 !font-normal bg-white-A700 text-center rounded-[50%]'
            >
              2
            </Text>
          </div>
          <div className='flex flex-row justify-start items-center w-[34%] ml-10 gap-[15px]'>
            <Text as='p' className='text-indigo-900'>
              Next
            </Text>
            <Img
              src='images/img_arrowpointingtoright_1.svg'
              alt='arrowpointing'
              className='h-4 w-4'
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
