'use client'
import Image from "next/image";
import FooterLogo from '../../../public/assets/category/footer.png';
import FooterDiscord from '../../../public/assets/icon/Fdiscord.png';
import FooterTwitter from '../../../public/assets/icon/Fx.png';
import FooterTelegram from '../../../public/assets/icon/Ftelegram.png';
import FooterMedium from '../../../public/assets/icon/Fmedia.png';
import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});

export default function Footer() {
    return (
        <footer className={`flex ${jost.className}`}>
            <div className="w-[1300px] m-auto  mt-[150px] sm:mt-[150px] px-[25px]">
                <div className="w-full h-[1px] bg-[#27B17D]"></div>
                <div className="w-full flex items-end justify-between sm:pb-[58px]">
                    <div className="sm:block hidden">
                        <Image
                            alt="footer-logo"
                            src={FooterLogo}
                            className="w-[320px]"
                        />
                        <h1 className="mt-[52px] text-[14px] font-light">Copyright Astromove 2025</h1>
                    </div>
                    <div className="w-[257px] sm:block hidden">
                        <button
                            className="rounded-[10px] bg-[#27B17D] mt-[45px] w-full h-[35px]"
                        >
                            <span className={`text-[16px] font-medium ${jost.className}`}>Join the Community</span>
                        </button>
                        <div className="flex mt-[36px] mb-[45px] w-full justify-between px-[5px]">
                            <a href="#"> <Image alt="twitter" src={FooterTwitter} /> </a>
                            <a href="#"> <Image alt="telegram" src={FooterTelegram} /> </a>
                            <a href="#"> <Image alt="discord" src={FooterDiscord} /> </a>
                            <a href="#"> <Image alt="medium" src={FooterMedium} /> </a>
                        </div>
                        <div className="flex w-full justify-between px-[4px]">
                            <a href="#">
                                <h1 className="text-[16px] font-400 tracking-1">Terms and Conditions</h1>
                            </a>
                            <a href="#">
                                <h1 className="text-[16px] font-400 tracking-1">Docs</h1>
                            </a>
                        </div>
                    </div>

                    <div className="sm:hidden w-full flex flex-col items-center">
                        <div className="sm:w-[257px] w-footerlogo">
                            <Image
                                alt="footer-logo"
                                src={FooterLogo}
                                className="w-[320px] mt-[15px]"
                            />
                            <button
                                className="rounded-[10px] bg-[#27B17D] my-[20px] w-full h-[35px]"
                            >
                                <span className={`text-[16px] font-medium ${jost.className}`}>Join the Community</span>
                            </button>
                            <div className="flex my-[20px] w-full justify-between">
                                <a href="#"> <Image alt="twitter" src={FooterTwitter} /> </a>
                                <a href="#"> <Image alt="telegram" src={FooterTelegram} /> </a>
                                <a href="#"> <Image alt="discord" src={FooterDiscord} /> </a>
                                <a href="#"> <Image alt="medium" src={FooterMedium} /> </a>
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center mt-[35px]">
                            <h1 className="xs:text-[14px] text-[10px] font-light">Copyright Astromove 2025</h1>
                            <div className="flex xs:w-[200px] w-[160px] justify-between">
                                <a href="#">
                                    <h1 className="xs:text-[16px] text-[12px] font-light">Terms and Conditions</h1>
                                </a>
                                <a href="#">
                                    <h1 className="xs:text-[16px] text-[12px] font-400">Docs</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
