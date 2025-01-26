'use client'
import Image, { StaticImageData } from 'next/image'
import Add from '../../../public/assets/icon/Wallet/add.png';
import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});


export default function WalletItem({ icondisplay, counterdisplay, addview, walletname, ConnectWallet }: {
    icondisplay: StaticImageData,
    counterdisplay: string,
    addview: string,
    walletname: string,
    ConnectWallet: () => void,
}) {
    return (
        <button
            className={`w-full h-[60px] flex items-center px-[18px] rounded-[10px] justify-between bg-gradient-to-tl from-[#27b17c1e] to-[#27b17c0c] hover:bg-gradient-to-tl hover:from-[#27b17c48] hover:to-[#27b17c1a] ${jost.className} `}
            onClick={ConnectWallet}
        >
            <div className='flex items-center gap-[20px]'>
                <Image
                    alt='wallet icon'
                    src={icondisplay}
                />
                <p className='text-[16px] font-normal'>{walletname}</p>
            </div>
            <Image
                style={{ display: addview }}
                alt='add'
                src={Add}
            />
            <h1 className='text-[12px] font-medium text-[#45504E]' style={{ display: counterdisplay }}>+256</h1>
        </button>
    )
}