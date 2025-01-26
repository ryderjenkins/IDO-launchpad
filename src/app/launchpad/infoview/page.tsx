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
        <div className="w-full mt-[140px]">
            <div className="w-full flex justify-between">
                <div className="flex w-[400px] justify-between mb-[50px]">
                    <button
                        className={`w-[180px] h-[40px] bg-[#090A17] rounded-[10px] flex items-center justify-center 
                            ${select ? 'border-[1px] border-[#27B17D]' : ''}`}
                        onClick={LiveUpcomingView}
                    >
                        <p className={`text-[#93949A] ${select ? 'text-white' : ''}`}>Live & Upcoming</p>
                    </button>

                    <button
                        className={`w-[180px] h-[40px] bg-[#090A17] rounded-[10px] text-white flex items-center justify-center
                            ${!select ? 'border-[1px] border-[#27B17D]' : ''}`}
                        onClick={CompletedView}
                    >
                        <p className={`text-[#93949A] ${!select ? 'text-white' : ''}`}>Completed</p>
                    </button>
                </div>
                <input type="text" placeholder="Search Project" className="w-[400px] h-[40px] bg-[#090A17] font-normal rounded-[10px] text-white px-[20px] text-[16px] outline-none focus:ring-1 ring-[#27B17D]" />
            </div>

            {select ?
                <div className="w-full flex justify-between flex-wrap gap-y-8">
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
                :
                <div className="w-full flex flex-col">
                    <div className="w-full px-[30px] grid grid-cols-[2.5fr_1fr_1fr_1.5fr_1.5fr_2fr_1fr] mb-[50px]">
                        <h1 className="text-[28px] font-medium">PROJECTS</h1>
                        <h1 className="text-[28px] font-medium">Now</h1>
                        <h1 className="text-[28px] font-medium">IDO</h1>
                        <h1 className="text-[28px] font-medium">Ah1</h1>
                        <h1 className="text-[28px] font-medium">When</h1>
                        <h1 className="text-[28px] font-medium">Raise</h1>
                    </div>
                    <div className="border-[1px] border-[#27B17D] rounded-[10px] bg-[#030409] p-[30px]">
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

                    </div>
                </div>
            }
        </div>
    )
}