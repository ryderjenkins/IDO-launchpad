'use client'
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../../../public/assets/icon/headerlogo.png";
import Wallet from "../../../public/assets/icon/wallet.png";
import React, { useEffect, useState } from 'react';
import WalletModal from "./WalletModal";

export default function Header() {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (

        <div className={`w-full h-[90px] flex sticky top-0 z-50 ${isModalOpen === false && isSticky ? 'backdrop-blur-2xl bg-[#27b17c11]' : ''}`}>
            <div className="w-[1440px] h-full m-auto flex justify-between items-center ">
                <Link href={"/"}>
                    <Image src={HeaderLogo} alt="logo" />
                </Link>
                <div className="w-[400px] h-[40px] border-[#646a6b71] border-[1px] flex items-center justify-center gap-16 rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c]">
                    <Link href={"/launchpad"} className="text-[20px]">IDO Launchpad</Link>
                    <Link href={"/claims"} className="text-[20px]">Claims</Link>
                </div>
                <button
                    className="w-[250px] h-[40px] rounded-[10px] bg-[#27B17D] flex items-center justify-center gap-3"
                    onClick={openModal}
                >
                    <Image
                        alt="wallet"
                        src={Wallet}
                    />
                    <h1 className="text-[20px] font-medium">Connect Wallet</h1>
                </button>
            </div>
            <WalletModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>

    )
}