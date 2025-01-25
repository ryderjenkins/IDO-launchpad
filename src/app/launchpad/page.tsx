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
        <div className={`flex ${jost.className}`}>
            <div className="w-[1440px] m-auto">
                <LaunchpadIntro />
                <InfoView />
            </div>
        </div>
    )
}