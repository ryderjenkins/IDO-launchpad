import Image from "next/image";
import Button2 from "./button2";
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
            <div className="w-[1440px] m-auto  mt-[150px]">
                <div className="w-full h-[1px] bg-[#27B17D]"></div>
                <div className="w-full flex items-end justify-between my-[60px]">
                    <div>
                        <Image
                            alt="footer-logo"
                            src={FooterLogo}
                            className="w-[390px]"
                        />
                        <h1 className="mt-[70px] text-[16px] font-light">Copyright Astromove 2025</h1>
                    </div>
                    <div className="w-[300px]">
                        <Button2
                            width="300px"
                            height="50px"
                            name="Join the Community"
                        />
                        <div className="flex my-[50px] w-full justify-between">
                            <a href="#"> <Image alt="discord" src={FooterDiscord} /> </a>
                            <a href="#"> <Image alt="twitter" src={FooterTwitter} /> </a>
                            <a href="#"> <Image alt="telegram" src={FooterTelegram} /> </a>
                            <a href="#"> <Image alt="medium" src={FooterMedium} /> </a>
                        </div>
                        <div className="flex w-full justify-between">
                            <a href="#">
                                <h1 className="text-[18px] font-semibold">Terms and Conditions</h1>
                            </a>
                            <a href="#">
                                <h1 className="text-[18px] font-semibold">Docs</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
