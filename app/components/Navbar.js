import React from 'react'
import { Heading } from './Heading';
import { Img } from './Img';
import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navbar() {
  const {userId} = auth();
  return (
    <div>
      <header className='flex justify-center items-center w-full p-6 bg-white-A700 mb-20'>
        <div className='flex flex-row justify-between items-center w-full mx-auto max-w-[1114px]'>
          <div className='flex flex-row justify-between items-center w-[69%]'>
            <Img src='images/img_group_150.svg' alt='image' className='h-6' />
            <div className='flex flex-row justify-between items-center w-[53%]'>
              <div className='flex flex-col items-center justify-start w-[13%] gap-0.5'>
                <Heading
                  as='h6'
                  className='!text-indigo-900_01 tracking-[0.12px] text-center'
                >
                  <Link href='/'>Home</Link>
                </Heading>
                <div className='h-px w-full bg-indigo-900_01' />
              </div>

              <Heading
                as='h6'
                className='!text-indigo-200_01 tracking-[0.12px] text-center'
              >
                <Link href='/blog'>Podcast</Link>
              </Heading>
              <Heading
                as='h6'
                className='!text-indigo-200_01 tracking-[0.12px] text-center'
              >
                <Link href='/blog'>

                Blog
                </Link>
              </Heading>
              <Heading
                as='h6'
                className='!text-indigo-200_01 tracking-[0.12px] text-center'
              >
                <Link href='/about'>About</Link>
              </Heading>
              <Heading
                as='h6'
                className='!text-indigo-200_01 tracking-[0.12px] text-center'
              >
                <Link href='/contact'>
                Contact
                </Link>
              </Heading>
            </div>
          </div>
          <Img
            src='images/img_search.svg'
            alt='search_one'
            className='h-[30px] w-[30px]'
          />
        </div>
        {userId ? (
          <div className='text-white mr-10'>
            <UserButton afterSignOutUrl='/' />
          </div>
        ) : (
          <div className='mr-5 flex gap-4'>
            <Link href='/authentication/Login'>Sign In</Link>
            <Link href='/authentication/Register'>Sing Up </Link>
          </div>
        )}
      </header>
    </div>
  );
}
