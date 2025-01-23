import Drop from "../../../public/assets/icon/dropdown.png";
import Image from "next/image";

import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})


export default function FAQcard({ onToggle, isOpen, faqtitle, description }: { onToggle: () => void, isOpen: boolean, faqtitle: string, description: string }) {

    return (
        <div>
            <div
                className={`w-full box-border px-[24px] py-4 mb-[40px] none items-center justify-between rounded-[10px] hover:backdrop-blur-lg hover:cursor-pointer hover:bg-gradient-to-l hover:from-[#e3e3e30c] ${isOpen ? 'backdrop-blur-lg bg-gradient-to-l from-[#e3e3e30c] border-[1px] border-[#27b17c69] ' : 'border-none'} ${jost.className} `}
                onClick={onToggle}
            >
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-[28px] font-medium">{faqtitle}</h1>
                    <Image
                        alt="dropdown"
                        src={Drop}
                        className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-500`}
                    />
                </div>

                <p className={`text-[18px] font-light text-white overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40  mt-[30px] mb-[20px]' : 'max-h-0'}`}>
                    {description}
                </p>

            </div>
        </div>
    )
}