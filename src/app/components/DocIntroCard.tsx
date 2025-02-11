import Image from "next/image"
import MoviePlayIcon from '../../../public/assets/icon/playIcon.png';
import GalleryIcon from '../../../public/assets/icon/galleryIcon.png';

export default function DocIntroCard({ height, selectIcon, margintop }: { height: string, selectIcon: boolean, margintop: string }) {
    return (
        <div className="w-full relative hover:bg-[#494949] rounded-[10px]" style={{ height: height, marginTop: margintop }}>
            <div className="w-full h-full bg-[#ffff] flex justify-center items-center rounded-[10px] opacity-25"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                {selectIcon ?
                    <Image src={MoviePlayIcon} alt="intromovie" />
                    :
                    <Image src={GalleryIcon} alt="intromovie" />
                }
            </div>
        </div>
    )
}