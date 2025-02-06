'use client'
import Image, { StaticImageData } from 'next/image';
import WalletItem from './WalletItem';
import Help from '../../../public/assets/icon/Wallet/help.png';
import Close from '../../../public/assets/icon/Close.png';
import Back from '../../../public/assets/icon/size.png';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#030409',
    border: '1px solid #E3E3E3',
    boxShadow: 24,
    borderRadius: '10px',
    py: '20px',
    px: '20px',
};

import { Jost } from 'next/font/google';
const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

});

import Sui from '../../../public/assets/icon/Wallet/sui.png';
import Petra from '../../../public/assets/icon/Wallet/petra.png';
import Phantom from '../../../public/assets/icon/Wallet/phantom.png';
import More from '../../../public/assets/icon/Wallet/more.png';

interface DataItem {
    icondisplay: StaticImageData;
    counterdisplay: string;
    addview: string;
    walletname: string;
}

const data: DataItem[] = [
    {
        icondisplay: Sui,
        counterdisplay: 'none',
        addview: 'none',
        walletname: 'Sui Wallet',
    },
    {
        icondisplay: Petra,
        counterdisplay: 'none',
        addview: 'block',
        walletname: 'Petra Wallet',
    },
    {
        icondisplay: Phantom,
        counterdisplay: 'none',
        addview: 'none',
        walletname: 'Phantom Wallet',
    },
    {
        icondisplay: More,
        counterdisplay: 'block',
        addview: 'none',
        walletname: 'More',
    },

];


import MetaMask from '../../../public/assets/icon/MoreWallet/MetaMask.png';
import Aptos from '../../../public/assets/icon/MoreWallet/aptos.png';
import ABC from '../../../public/assets/icon/MoreWallet/abc.png';
import Infinty from '../../../public/assets/icon/MoreWallet/infinity.png';
import Blocto from '../../../public/assets/icon/MoreWallet/blocto.png';
import Gem from '../../../public/assets/icon/MoreWallet/gem.png';
import Fewcha from '../../../public/assets/icon/MoreWallet/fewcha.png';
import Ginco from '../../../public/assets/icon/MoreWallet/ginco.png';
import Shadow from '../../../public/assets/icon/MoreWallet/shadow.png';
import Arculus from '../../../public/assets/icon/MoreWallet/arculus.png';
import Msafe from '../../../public/assets/icon/MoreWallet/msafe.png';
import Flipper from '../../../public/assets/icon/MoreWallet/flipper.png';
import Trust from '../../../public/assets/icon/MoreWallet/trust.png';
import Desig from '../../../public/assets/icon/MoreWallet/desig.png';
import Surf from '../../../public/assets/icon/MoreWallet/surf.png';
import Defy from '../../../public/assets/icon/MoreWallet/defy.png';
import Pontem from '../../../public/assets/icon/MoreWallet/pontem.png';
import Nightly from '../../../public/assets/icon/MoreWallet/nightly.png';
import OKX from '../../../public/assets/icon/MoreWallet/okx.png';
import Turnkey from '../../../public/assets/icon/MoreWallet/turnkey.png';
import Token from '../../../public/assets/icon/MoreWallet/token.png';
import Biget from '../../../public/assets/icon/MoreWallet/bitget.png';
import Math from '../../../public/assets/icon/MoreWallet/math.png';
import Suiet from '../../../public/assets/icon/MoreWallet/suiet.png';
import Ethos from '../../../public/assets/icon/MoreWallet/ethos.png';
import WalletItemSquare from './WalletItemSquare';

interface MoreWalletItem {
    walletitems: StaticImageData;
    walletname: string;
}

const Wallet: MoreWalletItem[] = [
    {
        walletitems: MetaMask,
        walletname: 'MetaMask',
    },
    {
        walletitems: Aptos,
        walletname: 'Aptos Connect',
    },
    {
        walletitems: ABC,
        walletname: 'ABC Wallet',
    },
    {
        walletitems: Defy,
        walletname: 'Defy',
    },
    {
        walletitems: Pontem,
        walletname: 'Pontem Wallet',
    },
    {
        walletitems: Infinty,
        walletname: 'Infinty Wallet',
    },
    {
        walletitems: Blocto,
        walletname: 'Blocto',
    },
    {
        walletitems: Gem,
        walletname: 'Gem Wallet',
    },
    {
        walletitems: Nightly,
        walletname: 'Nightly',
    },
    {
        walletitems: OKX,
        walletname: 'OKX Wallet',
    },
    {
        walletitems: Fewcha,
        walletname: 'Fewcha',
    },
    {
        walletitems: Ginco,
        walletname: 'Ginco',
    },
    {
        walletitems: Shadow,
        walletname: 'Shadow Wallet',
    },
    {
        walletitems: Turnkey,
        walletname: 'Turnkey'
    },
    {
        walletitems: Token,
        walletname: 'TokenPocket',
    },
    {
        walletitems: Arculus,
        walletname: 'Arculus Wallet',
    },
    {
        walletitems: Msafe,
        walletname: 'Msafe',
    },
    {
        walletitems: Flipper,
        walletname: 'Flipper',
    },
    {
        walletname: 'Bitget Wallet',
        walletitems: Biget,
    },
    {
        walletname: 'Math Wallet',
        walletitems: Math,
    },
    {
        walletitems: Trust,
        walletname: 'Trust Wallet',
    },
    {
        walletitems: Desig,
        walletname: 'Desig Multisig',
    },
    {
        walletitems: Surf,
        walletname: 'Surf Wallet',
    },
    {
        walletname: 'Suiet',
        walletitems: Suiet,
    },
    {
        walletname: 'Ethos',
        walletitems: Ethos,
    },
];



export default function WalletModal(
    { isOpen, onClose }: {
        isOpen: boolean,
        onClose: () => void
    }) {


    const [viewhandle, setViewhandle] = useState(true);

    const handleView = () => {
        setViewhandle(!viewhandle);
    };

    useEffect(() => {
        setViewhandle(true);
    }, [isOpen]);

    return (
        <div className={`${jost.className}`}>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                className='backdrop-blur-sm'
            >
                <Box sx={{ ...style, width: 324, padding: '18px 23px' }}>
                    <div className={` ${viewhandle ? 'block' : 'hidden'}`}>
                        <div className={`flex justify-between items-center pb-[18px] border-b-[1px] border-b-[#6e6e6e]`}>
                            <a href="">
                                <Image
                                    alt='help'
                                    src={Help}
                                />
                            </a>
                            <h1 className={`text-[16px] font-medium ${jost.className}`}>Connect Wallet</h1>
                            <a
                                className='cursor-pointer block w-[15px] h-[10px]'
                                onClick={onClose}
                            >
                                <Image
                                    alt='close'
                                    src={Close}
                                />
                            </a>
                        </div>
                        <div className='flex flex-col mt-[16px] gap-[16px]'>
                            {data.map((item, index) => (
                                <WalletItem
                                    key={index}
                                    icondisplay={item.icondisplay}
                                    counterdisplay={item.counterdisplay}
                                    addview={item.addview}
                                    walletname={item.walletname}
                                    ConnectWallet={item.walletname == "More" ? handleView : () => { }}
                                />
                            ))}
                        </div>
                    </div>


                    <div className={`${viewhandle ? 'hidden' : 'block'}`}>
                        <div className={`flex justify-between items-center pb-[20px] border-b-[1px] border-b-[#6e6e6e]`}>
                            <div
                                className='cursor-pointer flex items-center w-[15px] h-[10px]'
                                onClick={handleView}
                            >
                                <Image
                                    alt='back'
                                    src={Back}
                                />
                            </div>
                            <h1 className={`text-[16px] font-medium ${jost.className}`}>All Wallet</h1>
                            <a
                                className='cursor-pointer block w-[15px] h-[10px]'
                                onClick={onClose}
                            >
                                <Image
                                    alt='close'
                                    src={Close}
                                />
                            </a>
                        </div>
                        <input type="text" placeholder='Search Wallet' className='w-full h-[24px] mt-[20px] rounded-[10px] px-[10px] text-[12px] font-medium text-white bg-black  focus:outline-none focus:ring-1 focus:ring-[#27B17D]' />
                        <div className='flex flex-wrap mt-[16px] gap-[6px]'>
                            {Wallet.map((item, index) => (
                                <WalletItemSquare
                                    key={index}
                                    walletitems={item.walletitems}
                                    walletname={item.walletname}
                                    ConnectWallet={() => { }}
                                />
                            ))}
                        </div>
                    </div>

                </Box>

            </Modal>
        </div>
    );
}
