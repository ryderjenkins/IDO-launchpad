import Image, { StaticImageData } from 'next/image'

import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});

export default function WalletItemSquare({ walletitems, walletname, ConnectWallet }: {
    walletitems: StaticImageData,
    walletname: string,
    ConnectWallet: () => void,
}) {
    return (
        <button
            className={`${jost.className} w-[60px] h-[80px] py-[12px] flex flex-col mt-[2px] items-center justify-between rounded-[10px] bg-gradient-to-tl from-[#27b17c1e] to-[#27b17c0c] hover:bg-gradient-to-tl hover:from-[#27b17c73] hover:to-[#27b17c49]`}
            onClick={ConnectWallet}
        >
            <Image
                alt='wallet icon'
                src={walletitems}
            />
            <h1 className='text-[10px] font-medium text-white'>{walletname}</h1>
        </button>
    )
}