'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ToTopIcon from '../../../public/assets/icon/ToTopIcon.png';



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

    return (

        < div className="fixed bottom-5 right-5 flex items-center " style={{ display: isVisible ? 'flex' : 'none' }} >
            <button
                onClick={scrollToTop}
                className={`flex justify-center items-center w-[50px] h-[50px] rounded-[25PX] border-1 border-[#E3E3E3] border-opacity-40 bg-gradient-to-l backdrop-blur-[24px] from-[#e3e3e309] to-[#e3e3e310] shadow-md shadow-[#27B17D] z-20 duration-500 ease-out`}
            >
                <Image
                    alt="To Top"
                    src={ToTopIcon}
                />
            </button>
        </div >
    )
}