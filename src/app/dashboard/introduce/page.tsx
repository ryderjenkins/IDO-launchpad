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
        <div className="w-full m-auto 2xl:flex items-center justify-between">
            <div className='2xl:hidden flex justify-center'>
                <div
                    className="bg-no-repeat bg-cover flex items-center justify-center"
                    style={{ width: 'calc(60px + 100vw * 0.3)', height: 'calc(60px + 100vw * 0.3)', backgroundImage: "url(assets/category/moon.png)" }}>
                    <Image
                        alt='astromove'
                        src={astromove}
                        className='animate-updown'
                        style={{ width: '60%', height: '60%' }}
                    />
                </div>
            </div>
            <div className="2xl:w-[730px] mx-[10px] flex flex-col items-center 2xl:block mt-[30px] 2xl:mt-0">
                <h1 className={`text-fluid 2xl:text-[52px] text-white ${jost.className}`}>FUEL YOUR DREAMS, LAUNCH</h1>
                <h1 className={`text-fluid2 2xl:text-[70px] text-white ${jost.className}`}><b>TO THE MOON!</b></h1>
                <p className={`text-introdescription md:text-[24px] text-white block mt-[20px] font-light mb-[50px] ${jost.className}`}>Astromove identifies the best new tokens on the Aptos and Sui networks and launches them with a refund guarantee before they are listed on exchanges. Together, let’s redefine success in the Aptos and Sui ecosystems.</p>

                <a onClick={scrollToSection}>
                    <Button1
                        name={"How it works"}
                        width='182px'
                        height='50px'
                    />
                </a>
                <p className={`block my-[30px] text-white text-fluid3 md:text-[24px] font-light ${jost.className}`}>
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
            <div className='hidden 2xl:flex'>
                <div className="w-[450px] h-[450px] bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: "url(assets/category/moon.png)" }}>
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