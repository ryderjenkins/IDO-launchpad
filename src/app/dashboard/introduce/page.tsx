
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
    return (
        <div className="w-full m-auto flex items-center justify-between">
            <div className="w-[730px]">
                <h1 className={`text-[52px] text-white ${jost.className}`}>FUEL YOUR DREAMS, LAUNCH</h1>
                <h1 className={`text-[70px] text-white ${jost.className}`}><b>TO THE MOON!</b></h1>
                <p className={`text-[24px] text-white block mt-[20px] font-light mb-[50px] ${jost.className}`}>Astromove identifies the best new tokens on the Aptos and Sui networks and launches them with a refund guarantee before they are listed on exchanges. Together, let’s redefine success in the Aptos and Sui ecosystems.</p>
                <Button1
                    name={"How it works"}
                    width='182px'
                    height='50px'
                />
                <p className={`block my-[30px] text-white text-[24px] font-light ${jost.className}`}>
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
            <div className="w-[450px] h-[450px] bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: "url(assets/category/moon.png)" }}>
                <Image
                    alt='astromove'
                    src={astromove}
                    className='animate-updown'
                />
            </div>
        </div>
    )
}