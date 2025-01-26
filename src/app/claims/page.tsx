'use client'
import { Jost } from 'next/font/google';
import ClaimCard from '../components/ClaimCard';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

const ClaimInfo = [
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: true,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: true,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: true,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: true,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },
    {
        projectName: 'Project Name',
        investment: '$900,000',
        vesting: '1/6',
        startday: 'Jan 28, 2025',
        stateview: false,
    },

]

export default function Claims() {
    return (
        <div className={`flex w-full ${jost.className}`}>
            <div className="w-[1440px] m-auto mt-[80px]">
                <input type="text" className="w-[400px] text-[24px] bg-transparent border-b-[1px] py-1 transition duration-300 ease outline-none focus:border-[#27B17D] hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search" />
                <div className='w-full px-[20px] mt-[45px] grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr]'>
                    <h1 className='text-[20px] font-normal'>Claims</h1>
                    <h1 className='text-[20px] font-normal'>Investment</h1>
                    <h1 className='text-[20px] font-normal'>Vesting</h1>
                    <h1 className='text-[20px] font-normal'>Claim Start Date</h1>
                </div>
                <div className='w-full mt-[20px] flex flex-col gap-y-[25px]'>
                    {
                        ClaimInfo.map((item, index) => (
                            <ClaimCard
                                key={index}
                                projectName={item.projectName}
                                investment={item.investment}
                                vesting={item.vesting}
                                startday={item.startday}
                                stateview={item.stateview}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}