'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ToTopIcon from '../../../public/assets/icon/ToTopIcon.png';


import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});

export default function ToTopButton() {

    //scroll to top button
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    //scroll to top button hover event capture and add effect
    const [hoverstate, setHoverState] = useState(false);
    const setStateChange = () => {
        setHoverState(true);
    };
    const removeStateChange = () => {
        setHoverState(false);
    };

    return (

        < div className="fixed bottom-5 right-5 flex items-center " style={{ display: isVisible ? 'flex' : 'none' }} >

            <div
                className={`${jost.className} absolute right-[25px] flex overflow-hidden duration-500 ease-out bg-[#27B17D] rounded-[15px] ${hoverstate ? 'px-[15px]' : 'border-none'}`}
                style={{ width: hoverstate ? '100px' : '0' }}>
                <h1 className='text-[20px] font-bol'>To</h1>
                <h1 className='ml-[5px] text-[20px] '>Top</h1>
            </div>

            <button
                onClick={scrollToTop}
                className={`bg-[#27B17D] flex justify-center items-center p-[10px] rounded-[25PX] z-20 duration-500 ease-out`}
                onMouseEnter={setStateChange}
                onMouseLeave={removeStateChange}
            >
                <Image
                    alt="To Top"
                    src={ToTopIcon}
                    className="w-[30px] h-[30px]"
                />
            </button>
        </div >
    )
}