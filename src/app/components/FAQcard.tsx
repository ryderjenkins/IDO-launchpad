import Drop from "../../../public/assets/icon/dropdown.png";
import Image from "next/image";
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

export default function FAQcard() {
    return (
        <div className={`w-full h-[60px] box-border px-[24px] mb-[40px] flex items-center justify-between rounded-[10px] hover:backdrop-blur-lg hover:cursor-pointer hover:bg-gradient-to-l hover:from-[#e3e3e30c] " ${jost.className}`}>
            <h1 className="text-[24px] font-medium">What is an IDO?</h1>
            <Image
                alt="dropdown"
                src={Drop}
            />
        </div>
    )
}