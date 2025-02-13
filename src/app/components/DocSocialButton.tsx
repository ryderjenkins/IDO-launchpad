import Image, { StaticImageData } from "next/image"

export default function DocSocialButton({ buttonlog, buttonName }: { buttonlog: StaticImageData, buttonName: string }) {
    return (
        <button className='xs2:w-[400px] xs2:h-[120px] w-docsocialbuttonwidth h-docsocialbuttonheight pl-[24px] flex items-center border-[1px] border-[#27B17D] rounded-tl-[50px] rounded-bl-[10px] rounded-r-[10px]'>
            <Image alt="buttonlogo" src={buttonlog} />
            <h1 className="text-[32px] w-full text-white text-center">{buttonName}</h1>
        </button>
    )
}