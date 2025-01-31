import Image from 'next/image'
import Link from 'next/link'
import SidebarClose from '../../../public/assets/icon/sidebarclose.png';
import SidebarWallet from '../../../public/assets/icon/wallet.png';
import SidebarIDO from '../../../public/assets/icon/sidebarido.png';
import SidebarClaim from '../../../public/assets/icon/sidebarclaim.png';
import WalletModal from './WalletModal';
import { useState } from 'react';

export default function SideBar({ viewstate, sidebarclose }: { viewstate: boolean, sidebarclose: () => void }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
        sidebarclose();
    };

    return (
        <div className={`${viewstate ? 'block' : 'hidden'} w-[100vw] z-50 h-[100vh] bg-[#00000067] backdrop-blur-sm fixed top-0 left-0 z-500`}>
            <div className="w-full h-full" onClick={sidebarclose}></div>
            <div className="w-[250px] h-full bg-[#090A17] absolute right-0 top-0 py-[30px] px-[20px]">
                <div className='float-right'>
                    <button
                        onClick={sidebarclose}>
                        <Image
                            alt='close'
                            src={SidebarClose}
                        />
                    </button>
                </div>
                <div className='flex flex-col items-start gap-[10px] w-[200px] m-auto mt-[70px]'>
                    <button className='flex items-center gap-[20px] w-full h-[35px] px-[15px] bg-[#27B17D] rounded-2xl' onClick={openModal}>
                        <Image
                            alt='wallet'
                            src={SidebarWallet}
                            className='w-[20px] h-auto'
                        />
                        <span className='text-[16px]'>Connect Wallet</span>
                    </button>
                    <Link href={'/launchpad'} onClick={sidebarclose} className='flex items-center px-[15px] gap-[20px] w-full h-[35px] hover:bg-[#141529]'>
                        <Image
                            alt='launchpad'
                            src={SidebarIDO}
                            className='w-[20px] h-auto'
                        />
                        <span className='text-[16px]'>IDO Launchpad</span>
                    </Link>
                    <Link href={'/claims'} onClick={sidebarclose} className='flex items-center gap-[20px] px-[15px] w-full h-[35px] hover:bg-[#141529]'>
                        <Image
                            alt='claim'
                            src={SidebarClaim}
                            className='w-[20px] h-auto'
                        />
                        <span className='text-[16px]'>Claim</span>

                    </Link>
                </div>

            </div>
            <WalletModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}