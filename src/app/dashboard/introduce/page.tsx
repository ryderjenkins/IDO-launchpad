'use client'
import Button1 from '../../components/button1';
import Image from 'next/image';
import aptos from "../../../../public/assets/category/aptos.png";
import katman from "../../../../public/assets/category/katma.png";
import astromove from "../../../../public/assets/category/astromove.png";
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

export default function intruduce() {

    const scrollToSection = (event: React.MouseEvent) => {
        event.preventDefault();
        const section = document.getElementById('howitworks');
        if (section) {
            const topPosition = section.getBoundingClientRect().top + window.scrollY + 20;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth', // Smooth scrolling
            });
        }
    };

    return (
        <div className="w-full m-auto xl:mt-[90px] mt-[30px] xl:flex justify-between">
            <div className='w-full flex justify-center xl:hidden '>
                <div className='flex items-center justify-center xl:w-[532px] xl:p-[93px] p-moonpadding rounded-[10px] border-1 border-[#27B17D]'>
                    <div className="xl:w-[346px] w-moonwidth h-moonheight xl:h-[346px] bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: "url(assets/category/moon.png)" }}>
                        <Image
                            alt='astromove'
                            src={astromove}
                            className='animate-updown'
                            style={{ width: '60%', height: '60%' }}
                        />
                    </div>
                </div>
            </div>

            <div className="xl:w-[670px] mx-[10px] flex flex-col items-center xl:block mt-[30px] xl:mt-0">
                <h1 className={`text-fluid xl:text-[48px] sm:leading-[48px] sm:mt-[15px] sm:mb-[20px] text-white ${jost.className}`}>FUEL YOUR DREAMS, LAUNCH</h1>
                <h1 className={`text-fluid2 xl:text-[64px] sm:leading-[80px] text-white ${jost.className}`}><b>TO THE MOON!</b></h1>
                <p className={`text-introdescription md:text-[20px] xl:text-left text-center text-white block font-light mb-[50px] ${jost.className}`}>Astromove identifies the best new tokens on the Aptos and Sui networks and launches them with a refund guarantee before they are listed on exchanges. Together, let’s redefine success in the Aptos and Sui ecosystems.</p>

                <a onClick={scrollToSection}>
                    <Button1
                        name={"How it works"}
                        width='182px'
                        height='50px'
                    />
                </a>
                <p className={`block my-[30px] text-white text-fluid3 md:text-[20px] font-light ${jost.className}`}>
                    Supported Blockchains:
                </p>
                <div className='px-8 flex gap-8'>
                    <Image
                        alt={"aptos"}
                        src={aptos}
                    />
                    <Image
                        alt={"katman"}
                        src={katman}
                    />
                </div>
            </div>
            <div className='hidden xl:flex items-center justify-center w-[532px] h-[532px] rounded-[10px] border-1 border-[#27B17D]'>
                <div className="w-[346px] h-[346px] bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: "url(assets/category/moon.png)" }}>
                    <Image
                        alt='astromove'
                        src={astromove}
                        className='animate-updown'
                    />
                </div>
            </div>
        </div>
    )
}