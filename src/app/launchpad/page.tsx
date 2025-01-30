'use client'

import InfoView from "./infoview/page";
import LaunchpadIntro from "./launchpadintro/page"
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})

export default function Launchpad() {


    return (
        <div className={`flex w-full ${jost.className}`}>
            <div className="w-[1300px] m-auto sm:px-[25px] px-0">
                <LaunchpadIntro />
                <InfoView />
            </div>
        </div>
    )
}