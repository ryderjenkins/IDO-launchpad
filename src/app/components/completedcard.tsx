'use client'
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
        <tr
            className={`w-full sm:h-[50px] h-[30px] bg-[#E3E3E3] bg-opacity-10`}
            style={{
                background: handleback
            }}
        >
            <td className="w-[25vw]">
                <div className="flex items-center">
                    <Image
                        alt="project-logo"
                        src={CompleteCardLogo}
                    />
                    <h1 className="text-[16px] font-light ml-[20px]">{Projectname}</h1>
                </div>
            </td>
            <td className=" w-[10vw]"><h1 className="text-[12px] font-thin">{now}</h1></td>
            <td className=" w-[10vw]"><h1 className="text-[12px] font-thin">{ido}</h1></td>
            <td className="w-[15vw]"><h1 className="text-[12px] font-thin">{ahl}</h1></td>
            <td className="w-[20vw]"><h1 className="text-[12px] font-thin">{when}</h1></td>
            <td className="w-[15vw]"><h1 className="text-[12px] font-thin">{raise}</h1></td>
            <td className="w-[5vw]">
                <div className="flex items-center justify-end">
                    <button
                        className="text-white border-[1px] border-[#646769] w-[120px] h-[30px] rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c] "
                    >
                        <span className={`text-white text-[14px] font-light`}>Project View</span>
                    </button>
                </div>
            </td>
        </tr>
    );
}