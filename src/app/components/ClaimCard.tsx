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
        <div className="w-full rounded-[10px] py-[10px] border-[1px] border-[#E3E3E3] border-opacity-40 bg-gradient-to-r backdrop-blur-[16px] from-[#e3e3e309] to-[#e3e3e310]">
            <div className='w-full flex justify-between lg:grid grid-cols-[1.5fr_1fr_0.6fr_1fr_1.2fr] items-center '>
                <div className="flex items-center lg:ml-[10px] ml-[20px]">
                    <Image
                        alt='claim logo'
                        src={ClaimLogo}
                    />
                    <h1 className='lg:text-[24px] text-claimcardfluid font-medium ml-[15px]'>{projectName}</h1>
                </div>
                <h1 className='text-[20px] font-normal hidden lg:block'>{investment}</h1>
                <h1 className='text-[20px] hidden lg:block font-normal'>{vesting}</h1>
                <h1 className='text-[20px] font-normal hidden lg:block'>{startday}</h1>
                <div className='flex justify-end lg:mr-[10px] mr-[20px]'>
                    {stateview ?
                        <button className={`lg:w-[160px] lg:h-[50px] w-claimcardwidth h-claimcardheight bg-[#27B17D] rounded-[10px] lg:text-[24px] text-claimcardfluid3 text-white font-medium`}>Claim</button>
                        :
                        <button className='lg:w-[160px] lg:h-[50px] w-claimcardwidth h-claimcardheight bg-[#030409] rounded-[10px] lg:text-[24px] text-claimcardfluid3 text-[#737376] font-medium'>Unavailable</button>
                    }
                </div>
            </div>
            <div className='w-full flex justify-between lg:hidden mt-[5px] items-center px-[20px]'>
                <div>
                    <h1 className='lg:text-[18px] text-claimcardfluid2 text-[#E3E3E3]'>Investment</h1>
                    <h1 className='lg:text-[18px] text-claimcardfluid2'>{investment}</h1>
                </div>
                <div>
                    <h1 className='lg:text-[18px] text-claimcardfluid2 text-[#E3E3E3]'>Vesting</h1>
                    <h1 className='lg:text-[18px] text-claimcardfluid2' >{vesting}</h1>
                </div>
                <div>
                    <h1 className='lg:text-[18px] text-claimcardfluid2 text-[#E3E3E3]'>Claim Start Date</h1>
                    <h1 className='lg:text-[18px] text-claimcardfluid2'>{startday}</h1>
                </div>

            </div>

        </div>
    )
}