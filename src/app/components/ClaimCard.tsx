'use client'
import Image from 'next/image';
import ClaimLogo from '../../../public/assets/icon/claimproject.png';
export default function ClaimCard({ projectName, investment, vesting, startday, stateview }:
    {
        projectName: string,
        investment: string,
        vesting: string,
        startday: string,
        stateview: boolean,
    }) {
    return (
        <div className="w-full px-[20px] grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center h-[80px] rounded-[10px] border-[1px] border-[#E3E3E3] border-opacity-40 bg-gradient-to-r backdrop-blur-[16px] from-[#e3e3e309] to-[#e3e3e310]">
            <div className="flex items-center">
                <Image
                    alt='claim logo'
                    src={ClaimLogo}
                />
                <h1 className='text-[24px] font-medium ml-[25px]'>{projectName}</h1>
            </div>
            <h1 className='text-[20px] font-normal'>{investment}</h1>
            <h1 className='text-[20px] font-normal'>{vesting}</h1>
            <h1 className='text-[20px] font-normal'>{startday}</h1>
            <div className='flex justify-end'>
                {stateview ?
                    <button className={`w-[160px] h-[50px] bg-[#27B17D] rounded-[10px] text-[24px] text-white font-medium`}>Claim</button>
                    :
                    <button className='w-[160px] h-[50px] bg-[#030409] rounded-[10px] text-[24px] text-[#737376] font-medium'>Unavailable</button>
                }
            </div>
        </div>
    )
}