import React from 'react'
import { Heading } from './Heading';
import { Text } from './Text';
import { Button } from './Button';
import { Img } from './Img';
import { Input } from './Input';

export default function 
() {
  return (
    <div>
      <footer className='flex flex-col items-center justify-center w-full'>
        <div className='flex flex-row justify-evenly items-center w-[78%] mb-[40px] gap-[53px] py-[50px] bg-green-50 rounded-[5px]'>
          <div className='flex flex-col items-start justify-start w-[46%]'>
            <Text as='p' className='!text-indigo-900_01 text-blue-900'>
              NEWSLETTER
            </Text>
            <Heading
              size='xl'
              as='h1'
              className='mt-1 !font-merriweather !font-black text-emerald-600'
            >
              Subscribe to our website newsletter to receive news and updates.
            </Heading>
            <Text as='p' className='mt-5 !text-blue_gray-900 text-blue-900'>
              Get special offers directly to your email every week!
            </Text>
          </div>
          <div className='flex flex-col items-end justify-start w-2/5 mt-8 gap-[7px]'>
            <div className='flex flex-col items-start justify-start w-full gap-5'>
              <Input
                // color='white_A700'
                size='sm'
                // variant='fill'
                type='email'
                name='email'
                placeholder='Your Email'
                className=' font-bold border-indigo-900 bg-white text-sm '
              />
              <Button
                color='indigo_900_01'
                size='2xl'
                shape='round'
                className='!text-white-A700 font-semibold min-w-[137px]'
              >
                Subscribe
              </Button>
            </div>
            <Button
              color='pink_300'
              size='7xl'
              className='w-[77px] mr-[77px] rounded-[38px]'
            >
              <Img src='images/img_newspaper_1.svg' />
            </Button>
          </div>
        </div>
        <div className='flex flex-row justify-end w-full'>
          <div className='flex flex-row justify-center w-full p-[33px] bg-gray-600_01'>
            <div className='flex flex-col items-center justify-start w-[81%] mt-[30px] gap-[66px] mx-[132px]'>
              <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-col items-start justify-start w-[15%] gap-2'>
                  <div className='flex flex-row justify-start items-start gap-3.5'>
                    <Img
                      src='images/img_dashicons_welcome_write_blog.svg'
                      alt='dashicons_one'
                      className='h-6 w-6 mt-[3px]'
                    />
                    <Heading
                      size='lg'
                      as='h4'
                      className='!text-white-A700 !font-nunitosans uppercase text-center !font-extrabold'
                    >
                      Blogsly
                    </Heading>
                  </div>
                  <div className='flex flex-row justify-start items-center gap-2.5'>
                    <Img
                      src='images/img_heart_3_1.svg'
                      alt='heart3one_one'
                      className='h-5 w-5'
                    />
                    <Text as='p' className='!text-white-A700 !font-medium'>
                      Build with heart
                    </Text>
                  </div>
                </div>
                <div className='flex flex-row justify-between w-auto gap-[50px]'>
                  <Text as='p' className='!text-white-A700'>
                    Home
                  </Text>
                  <Text as='p' className='!text-white-A700'>
                    Podcast
                  </Text>
                  <Text as='p' className='!text-white-A700'>
                    Blog
                  </Text>
                  <Text as='p' className='!text-white-A700'>
                    About
                  </Text>
                  <Text as='p' className='!text-white-A700'>
                    Contact
                  </Text>
                </div>
                <div className='flex flex-col items-center justify-start w-[11%] gap-[19px]'>
                  <Heading as='h6' className='!text-white-A700 text-center'>
                    Follow Me on
                  </Heading>
                  <div className='flex flex-row justify-between w-full'>
                    <Img
                      src='images/img_instagram_3_1.svg'
                      alt='instagram3one'
                      className='h-[25px] w-[25px]'
                    />
                    <Img
                      src='images/img_whatsapp_2_1.svg'
                      alt='whatsapp2one'
                      className='h-[25px] w-[25px]'
                    />
                    <Img
                      src='images/img_linkedin_2_1.svg'
                      alt='linkedin2one'
                      className='h-[25px] w-[25px]'
                    />
                  </div>
                </div>
              </div>
              <Text size='xs' as='p' className='!text-white-A700'>
                Powered by Blogsly
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
