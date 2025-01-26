import Image from "next/image";
import CompleteCardLogo from '../../../public/assets/icon/livecard.png';

export default function CompletedCard(
    {
        Projectname, now, ido, ahl, when, raise, handleback }: {
            Projectname: string;
            now: string;
            ido: string;
            ahl: string;
            when: string;
            raise: string;
            handleback: string;
        }
) {
    return (
        <div
            className={`w-full grid grid-cols-[2.5fr_1fr_1fr_1.5fr_1.5fr_2fr_1fr] items-center h-[60px] bg-[#E3E3E3] bg-opacity-10`}
            style={{
                background: handleback
            }}
        >
            <div className="flex items-center">
                <Image
                    alt="project-logo"
                    src={CompleteCardLogo}
                />
                <h1 className="text-[18px] ml-[20px]">{Projectname}</h1>
            </div>
            <h1 className="text-[14px] font-normal">{now}</h1>
            <h1 className="text-[14px] font-normal">{ido}</h1>
            <h1 className="text-[14px] font-normal">{ahl}</h1>
            <h1 className="text-[14px] font-normal">{when}</h1>
            <h1 className="text-[14px] font-normal">{raise}</h1>
            <button
                className="text-white border-[1px] border-[#646769] w-[120px] h-[30px] rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c] "
            >
                <span className={`text-white text-[16px] font-medium`}>Project View</span>
            </button>
        </div>
    );
}