'use client'


export default function LaunchpadIntro() {
    return (
        <div className="flex w-full justify-center">
            <div className="flex justify-center lg:justify-normal lg:px-[24px] sm:w-full w-launchpadintrolwidth sm:h-[357px] h-launchpadheight border-[1px] border-[#646464] rounded-[10px] sm:mt-[100px] mt-launchpadmain backdrop-blur-lg bg-gradient-to-r bg-opacity-10 from-[#e3e3e309] to-[#e3e3e307]">
                <div className="flex flex-col lg:items-start items-center mt-[30px]">
                    <h1 className="lg:text-[32px] text-launchpadfluid">
                        FUEL YOUR DREAMS, LAUNCH
                    </h1>
                    <h1 className="lg:text-[48px] text-launchpadfluid2 font-bold">TO THE MOON!</h1>
                    <p className="lg:text-[16px] text-launchpadfluid3 font-normal xs:w-[410px] w-[300px] mb-[30px] text-center lg:text-left">
                        Astromove identifies the best new tokens on the Aptos and Sui networks and launches them with a refund guarantee before they are listed on exchanges. Together, let’s redefine success in the Aptos and Sui ecosystems.
                    </p>

                    <button
                        className="rounded-[10px] bg-[#27B17D] lg:w-[300px] lg:h-[50px] w-launchpadbuttonwidth h-launchpadbuttonheight"
                    >
                        <span className={`lg:text-[24px] text-launchpadbutton font-medium`}>Apply for IDOs</span>
                    </button>
                </div>
            </div>
        </div>
    )
} 