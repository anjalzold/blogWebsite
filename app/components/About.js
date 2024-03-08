"use client"

import React from "react";
import { Text } from "./Text";
import { Img } from "./Img";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import Footer from "./Footer";
import { currentUser, useAuth, useUser } from "@clerk/nextjs";

export default  function ContactUsPage() {
  const {userId} = useAuth();
  return (
    <>
    
      <div className='flex flex-col items-center justify-start w-full gap-[105px] bg-white-A700'>
    
        <div className='flex flex-row justify-center w-full max-w-[1103px]'>
          <div className='flex flex-row justify-center w-full'>
            <div className='flex flex-col items-center justify-start w-full'>
              <Heading size='xl' as='h1' className='!text-blue_gray-600'>
                Contact us {userId}
              </Heading>
              <Text as='p' className='mt-[5px]'>
                Complete the form to contact us 
              </Text>
              <div className='flex flex-row justify-start items-start w-full mt-[39px] gap-[29px]'>
                <div className='flex flex-col items-start justify-start w-[29%] gap-[19px]'>
                  <Heading size='xl' as='h2' className='!text-blue_gray-600'>
                    Info
                  </Heading>
                  <div className='flex flex-col items-start justify-start w-full gap-[18px]'>
                    <div className='flex flex-row justify-start items-center gap-2.5'>
                      <Img
                        src='images/img_vector_blue_gray_600.svg'
                        alt='vector_one'
                        className='h-5 w-5'
                      />
                      <Text as='p'>01234567890</Text>
                    </div>
                    <div className='flex flex-row justify-start items-center ml-[3px] gap-2.5'>
                      <Img
                        src='images/img_mail_1.svg'
                        alt='mailone_one'
                        className='h-5 w-5'
                      />
                      <Text as='p'>hello@gmail.com</Text>
                    </div>
                    <div className='flex flex-row justify-start items-start ml-[3px] gap-[9px]'>
                      <Img
                        src='images/img_pin_1.svg'
                        alt='pinone_one'
                        className='h-5 mt-[5px]'
                      />
                      <Text as='p' className='w-[92%] leading-[30px]'>
                        Massachusetts Ave NW, Washington, DC 20036
                      </Text>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-center w-[69%] mt-2 p-[26px] bg-white shadow-xl rounded-[10px]'>
                  <div className='flex flex-col items-start justify-start w-full gap-[30px] my-[17px]'>
                    <div className='flex flex-row justify-start gap-[25px] w-full'>
                      <Input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='w-[49%] font-light text-center '
                      />
                      <Input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='w-[49%] font-light'
                      />
                    </div>
                    <Input
                      name='your_subject'
                      placeholder='Your Subject'
                      className='w-full font-light'
                    />
                    <TextArea
                      name='description'
                      placeholder='Description'
                      className='w-full text-gray-400 font-light'
                    />
                    <Button
                      // color='indigo-900'
                      size='5xl'
                      shape='round'
                      className='text-white min-w-[190px] bg-indigo-900'
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className='flex justify-center items-center w-full p-[33px] bg-gray-600_01' />
      </div>
    </>
  );
}
