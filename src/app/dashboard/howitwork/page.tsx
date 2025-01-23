import Image from 'next/image';
import IDOS from '../../../../public/assets/category/IDOS.png';
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

export default function Howitworks() {
    return (
        <div className={`w-full mt-[180px] ${jost.className}`}>
            <h1 className='text-[50px] font-bold text-white mb-[-50px]'>HOW TO PARTICIPATE IN IDOS?</h1>
            <Image
                alt='howitworks'
                src={IDOS}
                className='w-full'
            />
            <div className='w-full grid grid-cols-4 gap-5'>
                <div>
                    <h1 className='text-[26px] font-medium'>CONNECT YOUR WALLET</h1>
                    <p className='text-[18px] font-light mt-[15px]'>Connect the wallet you use on the Sui or Aptos network to the website.</p>
                </div>
                <div>
                    <h1 className='text-[26px] font-medium'>CHECK YOUR BALANCE</h1>
                    <p className='text-[18px] font-light mt-[15px]'>Ensure that the amount you want to purchase is available in your wallet.</p>
                </div>
                <div>
                    <h1 className='text-[26px] font-medium'>SELECT THE SALE</h1>
                    <p className='text-[18px] font-light mt-[15px]'>Select the sale you wish to join and enter your purchase amount.</p>
                </div>
                <div>
                    <h1 className='text-[26px] font-medium'>APPROVE AND PARTICIPATE</h1>
                    <p className='text-[18px] font-light mt-[15px]'>Approve the wallet transactions to participate in the IDO.</p>
                </div>
            </div>
        </div>
    );
};