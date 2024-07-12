"use client "
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/pages/components/CustomButton'

export const Hero = () => {
    const handleScroll = () =>{

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x '>
                <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
                    Rent A Car Quickly and Easily
                </h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>
                    Streamline your car rental experience with our effortless booking process
                </p>
                <CustomButton
                title =" Explore Cars"
                containerStyles="var(--blue) text-white rounded-full  mt-10"
                handleClick ={handleScroll}
                />
            </div>
            <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'></div>
        </div>
    );
};