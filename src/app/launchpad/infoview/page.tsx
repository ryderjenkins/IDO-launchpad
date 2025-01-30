'use client'
import CompletedCard from "@/app/components/completedcard";
import LiveCard from "@/app/components/livecard";
import { useState } from "react";

const CardInfo = [
    { timeview: "", livestate: "", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "", livestate: "", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },

];

const CompletedCardInfo = [
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },
    { Projectname: "PROJECT NAME", now: "960$", ido: "32$", ahl: "30.0X", when: "JAN 14, 2025", raise: "$96.000" },

]


export default function InfoView() {
    const [select, setSelect] = useState(true);

    const LiveUpcomingView = () => {
        setSelect(true);
    }
    const CompletedView = () => {
        setSelect(false);
    }
    return (
        <div className="w-full sm:mt-[140px] mt-launchpadmain2">
            <div className="w-full lg:flex justify-between mb-[45px] sm:px-0 px-[10px]">
                <input type="text" className="w-full mb-[16px] sm:text-[24px] text-launchpadsearch bg-transparent lg:hidden border-b-[1px] border-[#E3E3E3] py-1 transition duration-300 ease outline-none focus:border-[#27B17D] hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search" />
                <div className="flex xs:w-[350px] justify-between">
                    <button
                        className={`w-[160px] h-[30px] bg-[#090A17] rounded-[10px] flex items-center justify-center 
                            ${select ? 'border-[1px] border-[#27B17D]' : ''}`}
                        onClick={LiveUpcomingView}
                    >
                        <span className={`text-[#93949A] sm:text-[16px] text-launchpadbtntext ${select ? 'text-white' : ''}`}>Live & Upcoming</span>
                    </button>

                    <button
                        className={`w-[160px] h-[30px] bg-[#090A17] rounded-[10px] text-white flex items-center justify-center
                            ${!select ? 'border-[1px] border-[#27B17D]' : ''}`}
                        onClick={CompletedView}
                    >
                        <span className={`text-[#93949A] sm:text-[16px] text-launchpadbtntext ${!select ? 'text-white' : ''}`}>Completed</span>
                    </button>
                </div>
                <input type="text" placeholder="Search Project" className="w-[400px] h-[30px] hidden lg:block bg-[#090A17] font-normal rounded-[10px] text-white px-[20px] text-[16px] outline-none focus:ring-1 ring-[#27B17D]" />
            </div>

            {select ?
                <div className="w-full flex lg2:justify-center">
                    <div className="w-full flex justify-center lg:justify-between xs:gap-x-5 lg2:w-[909px] 4xl:w-full flex-wrap gap-y-8">
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
                                />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div className="w-full flex justify-center">
                    <div className="border-[1px] border-[#27B17D] rounded-[10px] bg-[#030409] p-[15px] sm:mx-0 mx-[10px] overflow-x-auto w-launchpadlivecardview sm:w-full">
                        <table className="sm:w-full w-[660px] border-separate sm:border-spacing-y-0  border-spacing-y-2">
                            <thead className="w-full h-[80px]">
                                <tr className="w-full mb-[40px]">
                                    <th className="min-w-48"><h1 className="sm:text-[20px] text-launchpadtablehead text-left font-medium">PROJECTS</h1></th>
                                    <th className="min-w-10"><h1 className="sm:text-[20px] text-launchpadtablehead text-left font-medium">Now</h1></th>
                                    <th className="min-w-10"><h1 className="sm:text-[20px] text-launchpadtablehead text-left font-medium">IDO</h1></th>
                                    <th className="min-w-10"><h1 className="sm:text-[20px] text-launchpadtablehead text-left font-medium">Ah1</h1></th>
                                    <th className="min-w-20"><h1 className="sm:text-[20px] text-launchpadtablehead text-left font-medium">When</h1></th>
                                    <th className="min-w-15"><h1 className="sm:text-[20px] text-launchpadtablehead text-left font-medium">Raise</h1></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {CompletedCardInfo.map((item, index) => (
                                    <CompletedCard
                                        key={index}
                                        Projectname={item.Projectname}
                                        now={item.now}
                                        ido={item.ido}
                                        ahl={item.ahl}
                                        when={item.when}
                                        raise={item.raise}
                                        handleback={index % 2 === 0 ? "none" : " "}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}