'use client'
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../../../public/assets/icon/headerlogo.png";
import Wallet from "../../../public/assets/icon/wallet.png";
import Menu from '../../../public/assets/icon/responsivemenu.png';
import React, { useEffect, useState } from 'react';
import WalletModal from "./WalletModal";
import { usePathname } from "next/navigation";



import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});


export default function Header() {

    //Navbar bg control when scroll down or scroll up
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (window.scrollY > 0) {
            setIsSticky(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    //Modal view when click on wallet icon
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const LaunchedPageColor = () => {
        if (usePathname() === '/launchpad') {
            return 'text-[#27B17D]';
        } else {
            return 'text-white';
        }
    }
    const ClaimsPageColor = () => {
        if (usePathname() === '/claims') {
            return 'text-[#27B17D]';
        } else {
            return 'text-white';
        }
    }

    return (
        <div className={`${jost.className} w-full h-[90px] flex sticky top-0 z-10 backdrop-filter ${isSticky ? 'backdrop-blur-2xl bg-[#27b17c11]' : ''}`}>
            <div className="w-[1460px] h-full m-auto flex justify-between items-center px-[10px]">
                <Link href={"/"}>
                    <Image src={HeaderLogo} alt="logo" />
                </Link>
                <div className="lg:w-[400px] hidden sm:flex h-[40px] px-[10px] border-[#646a6b71] border-[1px] items-center justify-around gap-6 rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c]">
                    <Link
                        href={"/launchpad"}
                        className={`text-[20px] ${LaunchedPageColor()}`}>
                        IDO Launchpad
                    </Link>
                    <Link
                        href={"/claims"}
                        className={`text-[20px] ${ClaimsPageColor()}`}>
                        Claims
                    </Link>
                </div>

                <div className="flex items-center">
                    <button
                        className="md:w-[250px] px-[15px] h-[40px] rounded-[10px] bg-[#27B17D] flex items-center justify-center gap-3 mx-[5px]"
                        onClick={openModal}
                    >
                        <Image
                            alt="wallet"
                            src={Wallet}
                        />
                        <span className="text-[20px] font-medium">Connect Wallet</span>
                    </button>
                    <button className="sm:hidden ml-[10px]">
                        <Image
                            alt="menu"
                            src={Menu}
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