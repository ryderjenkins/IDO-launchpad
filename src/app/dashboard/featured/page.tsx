'use client'
import LiveCard from "../../components/livecard";
import { Jost } from 'next/font/google';
import { useRouter } from "next/navigation";

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})


const CardInfo = [
    { socialicon: "false", timeview: " ", livestate: " ", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { socialicon: "false", timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { socialicon: "false", timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { socialicon: "false", timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
];

export default function Featured() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/launchpad');
    };

    return (
        <div className={`w-full m-auto xl:mt-[115px] mt-mainmargin ${jost.className} `}>
            <h1 className='text-white 2xl:text-[40px] text-maintitle text-center lg2:text-left font-bold mb-[35px]'>FEATURED PROJECTS</h1>
            <div className="w-full mt-[80px]">

                <div className="w-full flex lg2:justify-center">
                    <div className="w-full flex justify-center lg:justify-between xs:gap-x-5 lg2:w-[909px] 4xl:w-full 4xl:h-[610px] 4xl:overflow-hidden flex-wrap gap-y-8">
                        {CardInfo.map((item, index) => (
                            <div key={index}>
                                <LiveCard
                                    timeview={item.timeview}
                                    projectname={item.projectname}
                                    description={item.description}
                                    target={item.target}
                                    token={item.token}
                                    startday={item.startday}
                                    endday={item.endday}
                                    livestate={item.livestate}
                                    socialicon={item.socialicon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full mt-[50px] flex items-center justify-center">
                    <button
                        className="border-[1px] border-[#646769] rounded-[10px] backdrop-blur-md bg-gradient-to-l from-[#e3e3e30c] w-[120px] h-[30px]"
                        onClick={handleClick}
                    >
                        <span className={`text-buttonfluid md:text-[16px] font-light ${jost.className}`}>View More</span>
                    </button>

                </div>
            </div>
        </div>
    );
};
