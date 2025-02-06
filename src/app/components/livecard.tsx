'use client'
import Image from "next/image";
import Button1 from "./button1";
import CardIcon from "../../../public/assets/category/icon.png";
import Earth from "../../../public/assets/icon/earth.png";
import Telegram from "../../../public/assets/icon/telegram.png";
import Medium from "../../../public/assets/icon/medium.png";
import Github from "../../../public/assets/icon/github.png";
import X from "../../../public/assets/icon/x.png";
import Linkedin from "../../../public/assets/icon/linkedin.png";
import Discord from "../../../public/assets/icon/discord.png";
import Instagram from "../../../public/assets/icon/instagram.png";
import Watch from "../../../public/assets/icon/watch.png";


export default function LiveCard(
    { timeview, projectname, description, target, token, startday, endday, livestate, socialicon }:
        {
            timeview: string,
            projectname: string,
            description: string,
            target: string,
            token: string,
            startday: string,
            endday: string,
            livestate: string,
            socialicon: string,
        }) {
    return (
        <div
            className="xs:w-[395px] h-[607px] w-livecardWidth box-border border-[1px] border-[#27B17D] rounded-[10px] relative">
            <div className="flex flex-col h-full">
                <div className="w-full h-[160px] bg-cover rounded-t-[10px]" style={{ backgroundImage: "url(assets/back/card.png)" }}></div>
                <div className="w-full h-[462px] bg-[#030409] rounded-b-[10px] bg-no-repeat bg-bottom backdrop-blur-md" style={{ backgroundImage: "url(assets/category/white_astromove.png)" }}></div>
            </div>

            <div className="w-full flex h-full absolute top-0 left-0 rounded-[10px]">
                <div className="w-[62px] h-[24px] border-[1px] border-[#27B17D] rounded-[5px] flex items-center justify-center top-[15px] left-[15px] absolute" style={{ display: livestate }}>
                    <p className="text-[#27B17D] text-[14px]">LIVE</p>
                </div>
                <div className="w-[350px] mx-[25px] mt-[125px] flex flex-col items-center">
                    <div className="w-[60px] h-[60px] bg-[#27B17D] rounded-[10px]">
                        <Image
                            alt="live"
                            src={CardIcon}
                        />
                    </div>
                    <h1 className="text-[20px] text-white text-center my-[15px] font-400">{projectname}</h1>
                    <p className="w-full text-[16px] h-[50px] overflow-hidden font-200 text-white text-center block">{description}</p>
                    <div className="w-full flex justify-between my-[20px]">
                        <div className="h-[116px] flex flex-col justify-between">
                            <h1 className="xs:text-[16px]  font-500 text-[#868688]">TARGETED RAISE</h1>
                            <h1 className="xs:text-[16px]  font-500 text-white">{target}</h1>
                            <h1 className="xs:text-[16px]  font-500 text-[#868688]">TOKEN PRICE</h1>
                            <h1 className="xs:text-[16px]  font-500 text-white">{token}</h1>
                        </div>
                        <div className="h-[116px] flex flex-col justify-between items-end">
                            <h1 className="xs:text-[16px]  font-500 text-[#868688]">STARTS</h1>
                            <h1 className="xs:text-[16px]  font-500 text-white">{startday}</h1>
                            <h1 className="xs:text-[16px]  font-500 text-[#868688]">ENDS</h1>
                            <h1 className="xs:text-[16px]  font-500 text-white">{endday}</h1>
                        </div>
                    </div>
                    <Button1
                        name="View Project"
                        width="100%"
                        height="32px"
                    />
                    <div className="w-full flex mt-[25px] gap-4 justify-center">
                        <a href="#"><Image alt="earth" src={Earth} /></a>
                        <a href="#"><Image alt="x" src={X} /></a>
                        <a href="#"><Image alt="telegram" src={Telegram} /></a>
                        <a href="#"><Image alt="medium" src={Medium} /></a>
                        <a href="#"><Image alt="discord" src={Discord} /></a>
                        <a href="#" className={`${socialicon === 'true' ? 'flex' : 'hidden'}`} ><Image alt="instagram" src={Instagram} /></a>
                        <a href="#" className={`${socialicon === 'true' ? 'flex' : 'hidden'}`} ><Image alt="linkedin" src={Linkedin} /></a>
                        <a href="#" className={`${socialicon === 'true' ? 'flex' : 'hidden'}`} ><Image alt="github" src={Github} /></a>
                    </div>
                </div>
                <div
                    className="w-full h-[50px] bg-[#090A17] rounded-b-[10px] flex items-center justify-around box-border mt-auto absolute bottom-0"
                    style={{ display: timeview }}
                >
                    <h1 className="text-[14px] text-[#27B17D] font-bold">REGISTRATION ENDS IN</h1>
                    <div className="flex justify-center items-center">
                        <Image alt="watch" src={Watch} />
                        <h1 className="text-[14px] text-[#27B17D] ml-[10px] font-bold ">7D 14H 46M 18S</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}