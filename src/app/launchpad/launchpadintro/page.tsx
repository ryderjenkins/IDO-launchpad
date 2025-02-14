'use client'
import Image from "next/image";
import Launchlogo from "../../../../public/assets/back/spaceship.png";

export default function LaunchpadIntro() {
    return (
        <div className="flex w-full sm:justify-center">
            <div className="flex justify-center relative lg:justify-normal mx-auto lg:items-center lg:px-[24px] sm:w-full w-launchpadintrolwidth lg:h-[329px] border-[1px] border-[#646464] rounded-[10px] sm:mt-[120px] mt-launchpadmain backdrop-blur-lg bg-gradient-to-r bg-opacity-10 from-[#e3e3e309] to-[#e3e3e307]">
                <div className="flex flex-col lg:items-start items-center lg:mt-0 mt-[20px]">
                    <h1 className="lg:text-[32px] lg:leading-[32px] text-launchpadfluid">
                        FUEL YOUR DREAMS, LAUNCH
                    </h1>
                    <h1 className="lg:text-[48px] lg:48px lg:my-[3px] lg:tracking-3 text-launchpadfluid2 font-500">TO THE MOON!</h1>
                    <p className="lg:text-[16px] text-launchpadfluid3 lg:leading-[19px] lg:tracking-2 font-300 xs:w-[410px] w-[300px] mb-[35px] text-center lg:text-left">
                        Astromove identifies the best new tokens on the Aptos and Sui networks and launches them with a refund guarantee before they are listed on exchanges. Together, let’s redefine success in the Aptos and Sui ecosystems.
                    </p>

                    <button
                        className="rounded-[10px] bg-[#27B17D] lg:w-[288px] lg:h-[50px] w-launchpadbuttonwidth h-launchpadbuttonheight"
                    >
                        <span className={`lg:text-[24px] text-launchpadbutton font-medium`}>Apply for IDOs</span>
                    </button>
                    <Image alt="ship" src={Launchlogo} className="md:w-[240px] md:h-[192px] w-launchlogowidth lg:hidden mt-[20px]" />
                </div>
                <div className="absolute left-0 bottom-0 w-full lg3:pr-[137px] lg2:pr-[50px] pr-[20px] flex justify-end">
                    <Image alt="ship" src={Launchlogo} className="w-[465px] h-[372px] lg:block hidden" />
                </div>
            </div>
        </div>
    )
} 