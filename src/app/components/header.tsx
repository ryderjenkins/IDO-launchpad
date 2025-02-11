'use client'
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../../../public/assets/icon/headerlogo.png";
import Wallet from "../../../public/assets/icon/wallet.png";
import Menu from '../../../public/assets/icon/responsivemenu.png';
import React, { useState } from 'react';
import WalletModal from "./WalletModal";
import { usePathname } from "next/navigation";

import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});


export default function Header({ sidebarview }: { sidebarview: () => void }) {

    //Navbar bg control when scroll down or scroll up
    // const [isSticky, setIsSticky] = useState(false);

    // const handleScroll = () => {
    //     const scrollTop = window.scrollY;
    //     setIsSticky(scrollTop > 50);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     if (window.scrollY > 0) {
    //         setIsSticky(true);
    //     }

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };

    // }, []);

    //Modal view when click on wallet icon
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const LaunchedPageColor = () => {
        if (usePathname() === '/launchpad') {
            return 'text-[#27B17D] font-medium';
        } else {
            return 'text-[#E3E3E3] font-light';
        }
    }
    const ClaimsPageColor = () => {
        if (usePathname() === '/claims') {
            return 'text-[#27B17D] font-medium';
        } else {
            return 'text-[##E3E3E3] font-light';
        }
    }

    // sidebar control when click on menu icon



    return (
        <div className={`${jost.className} w-full pt-[27px] flex sticky top-0 z-10 backdrop-filter `}>
            <div className="w-[1300px] h-full m-auto flex justify-between items-center sm:px-[25px] px-[10px]">
                <Link href={"/"}>
                    <Image src={HeaderLogo} alt="logo" className="xs2:w-[200px] w-logowidth min-w-[120px] h-auto" />
                </Link>
                <div className="w-[306px] hidden lg:flex h-[38px] px-[15px] border-[#646a6b71] border-[1px] items-center justify-around gap-6 rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c]">
                    <Link
                        href={"/launchpad"}
                        className={`text-[20px] font-light ${LaunchedPageColor()}`}>
                        IDO Launchpad
                    </Link>
                    <Link
                        href={"/claims"}
                        className={`text-[20px] font-light ${ClaimsPageColor()}`}>
                        Claims
                    </Link>
                </div>

                <div className="flex items-center">

                    <button
                        className="xs2:w-[225px] w-walletbuttonwidth px-[15px] xs2:h-[38px] h-walletbuttonheight rounded-[10px] bg-[#27B17D] flex items-center justify-center xs2:gap-3 gap-1 mx-[5px]"
                        onClick={openModal}
                    >
                        <Image
                            alt="wallet"
                            src={Wallet}
                            className="xs2:w-[20px] w-[15px] h-auto"
                        />
                        <span className="xs2:text-[20px] text-headerwallet text-[#E3E3E3] font-light">Connect Wallet</span>

                    </button>

                    <button className="lg:hidden flex ml-[10px]" onClick={sidebarview}>
                        <Image
                            alt="menu"
                            src={Menu}
                            className="xs2:h-[35px] h-sidebariconheight w-auto"
                        />
                    </button>
                </div>
            </div>

            <WalletModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </div>

    )
}