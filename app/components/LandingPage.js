import React from "react";
import { Text } from "./Text";
import { Img } from "./Img";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Input } from "./Input";
import { auth } from "@clerk/nextjs";
import ConnectDb from "../libs/ConnectDb";
import Blog from "../models/BlogModel";
import { NextResponse } from "next/server";
import Ending from "./Ending";
import CategoryModel from "../models/CategoryModel";
import Link from "next/link";



const getData = async ()=>{
  const { userId } = auth();
  console.log(userId);
  await ConnectDb();
  const result = await Blog.find();
  const categories = await Blog.aggregate([
      { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
      { $unwind: "$category" },
      { $group: { _id: "$category.name", count: { $sum: 1 } } },
      { $project: { _id: 0, name: "$_id", count: 1 } }
    ]).exec();    

  // console.log(result);
  return NextResponse.json({ result, categories });
}




export default async function LandingPagePage() {
const result = await getData()
const data = await result.json();

console.log(data.categories)




console.log(data)

  return (
    <>
      <div className='flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700'>
        <div className='flex flex-col items-center justify-start w-full gap-[159px] max-w-[1111px]'>
          <div className='flex flex-row justify-center w-[93%]'>
            <div className='flex flex-col items-center justify-start w-full'>
              <div className='flex flex-row justify-start items-start w-full gap-[43px]'>
                <Img
                  src='images/img_brand_1.svg'
                  alt='brandone_one'
                  className='h-[61px] w-[61px] mt-[66px]'
                />
                <div className='flex flex-col items-center justify-start w-4/5 mb-9 gap-[30px]'>
                  <Heading
                    size='3xl'
                    as='h1'
                    className='!font-merriweather text-center'
                  >
                    Share via writing and podcasts, hope you enjoy
                  </Heading>
                  <Text
                    size='lg'
                    as='p'
                    className='w-[78%] !text-gray-600 text-center leading-[35px]'
                  >
                    Increase your knowledge by reading new things and I will
                    share whatever I know for you, as long as I enjoy it
                  </Text>
                </div>
                <Img
                  src='images/img_blog_1.svg'
                  alt='blogone_one'
                  className='h-[61px] w-[61px] mt-[205px]'
                />
              </div>
              <div className='flex flex-row justify-start w-[51%] mt-[-4px] gap-[25px]'>
                <Button
                  // color='indigo_900_01'
                  // size='4xl'
                  className='  shadow-sm min-w-[221px] text-white bg-indigo-900 rounded-full'
                >
                  Read More
                </Button>
                <Button
                  // color='indigo_200'
                  // size='4xl'
                  // variant='outline'
                  className=' min-w-[271px] text-xl border-2 border-indigo-700 text-indigo-900 bg-white rounded-full '
                >
                  Listen to Podcasts
                </Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-start w-full gap-[100px]'>
            <div className='flex flex-col items-center justify-start w-full gap-[17px]'>
              <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-row justify-start items-center w-[39%] gap-[18px]'>
                  <Button color='gray_300' size='7xl' className='w-[76px]'>
                    <Img src='images/img_podcast_1.svg' />
                  </Button>
                  <div className='flex flex-col items-start justify-start w-[79%] gap-2'>
                    <Heading
                      size='xl'
                      as='h2'
                      className='ml-0.5 !font-merriweather text-center !font-black'
                    >
                      Latest Podcasts{" "}
                    </Heading>
                    <Text
                      size='lg'
                      as='p'
                      className='!text-gray-600 tracking-[0.12px] text-center text-nowrap text-xl'
                    >
                      Get started on latest episodes
                    </Text>
                  </div>
                </div>
                <a href='#'>
                  <Heading
                    size='xs'
                    as='h3'
                    className='!text-indigo-900 tracking-[0.12px]'
                  >
                    See all podcasts
                  </Heading>
                </a>
              </div>
              <div className='flex flex-row w-full gap-[22px]'>
                <div className='flex flex-col items-center justify-center w-[24%] gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]'>
                  <div className='h-[207px] w-full mt-[7px] relative'>
                    <Img
                      src='images/img_rectangle_9.png'
                      alt='image'
                      className='justify-center h-[207px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]'
                    />
                    <Button
                      color='gray_600_01'
                      className='w-[72px] top-[30%] right-0 left-0 m-auto absolute'
                    >
                      <Img src='images/img_play.svg' />
                    </Button>
                  </div>
                  <div className='flex flex-col items-start justify-start w-full mb-[5px] gap-2.5 '>
                    <Heading size='s' as='h4' className='!font-merriweather'>
                      The secrets of writing a good book
                    </Heading>
                    <Text size='xs' as='p'>
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[24%] gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]'>
                  <div className='h-[207px] w-full mt-[7px] relative'>
                    <Img
                      src='images/img_rectangle_9_207x233.png'
                      alt='image'
                      className='justify-center h-[207px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]'
                    />
                    <Button
                      color='gray_600_01'
                      className='w-[72px] top-[30%] right-0 left-0 m-auto absolute'
                    >
                      <Img src='images/img_play.svg' />
                    </Button>
                  </div>
                  <div className='flex flex-col items-start justify-start w-full mb-[5px] gap-2.5'>
                    <Heading size='s' as='h5' className='!font-merriweather'>
                      The secrets of writing a good book
                    </Heading>
                    <Text size='xs' as='p'>
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[24%] gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]'>
                  <div className='h-[207px] w-full mt-[7px] relative'>
                    <Img
                      src='images/img_rectangle_9_1.png'
                      alt='image'
                      className='justify-center h-[207px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]'
                    />
                    <Button
                      color='gray_600_01'
                      className='w-[72px] top-[30%] right-0 left-0 m-auto absolute'
                    >
                      <Img src='images/img_play.svg' />
                    </Button>
                  </div>
                  <div className='flex flex-col items-start justify-start w-full mb-[5px] gap-2.5'>
                    <Heading size='s' as='h6' className='!font-merriweather'>
                      The secrets of writing a good book
                    </Heading>
                    <Text size='xs' as='p'>
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[24%] gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]'>
                  <div className='h-[207px] w-full mt-[7px] relative'>
                    <Img
                      src='images/img_rectangle_9_2.png'
                      alt='image'
                      className='justify-center h-[207px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]'
                    />
                    <Button
                      color='gray_600_01'
                      className='w-[72px] top-[30%] right-0 left-0 m-auto absolute'
                    >
                      <Img src='images/img_play.svg' />
                    </Button>
                  </div>
                  <div className='flex flex-col items-start justify-start w-full mb-[5px] gap-2.5'>
                    <Heading size='s' as='h6' className='!font-merriweather'>
                      The secrets of writing a good book
                    </Heading>
                    <Text size='xs' as='p'>
                      By LaosPodcast
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-start items-start w-full gap-[29px]'>
              <div className='flex flex-col items-end justify-start w-[66%] gap-[50px]'>
                <div className='flex flex-col w-full gap-[50px]'>
                  {data.result.map(item => (
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
                                <Text size='xs' as='p' className='text-center'>
                                  12 September, 2020
                                </Text>
                              </div>
                            </div>
                            <Text size='xs' as='p' className='text-center'>
                              <span className='text-blue_gray-600'>
                                Category{" "}
                              </span>
                              <span className='text-pink-300 font-merriweather text-lg font-black'>
                                {/* {item.category.toUpperCase()} */}
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
                            className='w-full mt-[29px] ml-0.5 object-cover rounded-[5px] h-[400px]'
                          />
                          <Text
                            as='p'
                            className='mt-[30px] ml-0.5 !text-blue_gray-900 leading-[30px]'
                          >
                            {item.description}
                          </Text>
                          <div className='flex flex-row justify-between w-[65%] mt-[19px]'>
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
              </div>
              <div className='flex flex-col items-start justify-start w-[32%] gap-[49px]'>
                <div className='flex flex-col items-start justify-start w-full gap-[23px]'>
                  <div className='flex flex-col items-center justify-start'>
                    <Img
                      src='images/img_rectangle_10.png'
                      alt='image_one'
                      className='w-full object-cover rounded-[5px]'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-start gap-1'>
                    <Heading
                      size='lg'
                      as='h4'
                      className='ml-px !font-merriweather'
                    >
                      Jhone Leonardo
                    </Heading>
                    <Text size='s' as='p' className='text-center !font-medium'>
                      Podcaster & Blogger
                    </Text>
                  </div>
                  <Text as='p' className='ml-px leading-[30px]'>
                    I want to share knowledge in my own style. I have been
                    working on various things that I think I really need to
                    share with you all. I am a jhone podcaster and blogger
                  </Text>
                </div>
                <div className='flex flex-col items-start justify-start w-[44%] gap-5'>
                  <Heading as='h6' className='!font-merriweather'>
                    Follow Me On
                  </Heading>
                  <div className='flex flex-col items-start justify-start w-full gap-3.5'>
                    <div className='flex flex-row justify-start items-center gap-[5px]'>
                      <Img
                        src='images/img_email_1.svg'
                        alt='emailone_one'
                        className='h-5 w-5 mb-px'
                      />
                      <Text size='s' as='p'>
                        hello@gmail.com
                      </Text>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-2'>
                      <Img
                        src='images/img_vector.svg'
                        alt='vector_one'
                        className='h-5 w-5 mb-px'
                      />
                      <Text size='s' as='p'>
                        @insta_user
                      </Text>
                    </div>
                    <div className='flex flex-row justify-start items-center gap-[5px]'>
                      <Img
                        src='images/img_twitter_2_1.svg'
                        alt='twitter2one_one'
                        className='h-5 w-5 mb-px'
                      />
                      <Text size='s' as='p'>
                        @tweetuser
                      </Text>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-start w-full gap-[21px]'>
                  <Heading as='h6' className='!font-merriweather'>
                    Tranding Blog
                  </Heading>

                  <div className='flex flex-col w-full gap-5'>
                    {data.result.slice(0, 5).map(item => (
                      <div
                        className='flex flex-row justify-start items-center w-full gap-[15px] '
                        key={item._id}
                      >
                        <Img
                          src={item.image}
                          alt='image'
                          className='w-24 object-cover rounded-[5px] h-[100px]'
                        />
                        <div className='flex flex-col items-start justify-start w-[69%] gap-2.5'>
                          <Heading
                            as='h6'
                            className='!font-merriweather italic'
                          >
                            {item.title}{" "}
                          </Heading>
                          <Text size='xs' as='p'>
                            5 minutes ago
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col items-start justify-start w-full gap-[18px]'>
                  <Heading
                    as='h6'
                    className='tracking-[0.12px] !font-merriweather'
                  >
                    Categories
                  </Heading>
                  <div className='flex flex-col w-full gap-[9px]'>
                    {data.categories.map(item => (
                      <div className='flex flex-col items-center justify-start w-full pb-2.5'>
                        <div className='flex flex-row justify-between items-center w-full'>
                          <Text as='p'>
                            <Link href={`/${item.name}`}>{item.name}</Link>

                          </Text>
                          <div className='flex flex-col items-center justify-start h-10 w-10'>
                            <Text
                              as='p'
                              className='flex justify-center items-center h-10 w-10 !text-gray-600_01 !font-normal bg-blue-50 text-center rounded-[50%] text-black'
                            >
                              {item.count ? item.count : 0}
                            </Text>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Ending />
      </div>
    </>
  );
}
