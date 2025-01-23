
import LiveCard from "../../components/livecard";
import Button1 from "../../components/button1";
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',

})


const CardInfo = [
    { timeview: " ", livestate: " ", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
    { timeview: "none", livestate: "none", projectname: "PROJECT NAME", description: "Lorem ipsum dolor sit amet consectetur. Etiam scelerisque lacus mi id.", target: "900.000 USD", token: "0.00099 USD", startday: "JAN 14, 14:00 UTC", endday: "JAN 21, 14:00 UTC" },
];

export default function featured() {
    return (
        <div className={`w-full m-auto mt-[215px] ${jost.className}`}>
            <h1 className='text-white text-[40px] font-bold mb-[35px]'>FEATURED PROJECTS</h1>
            <div className="w-full mt-[80px]">
                {/* <div className="flex mb-[50px]">
                <button className="w-[160px] h-[30px] bg-[#090A17] rounded-[10px] text-white mr-[20px] flex items-center justify-center">
                    <p className="text-[#93949A]">Live & Upcoming</p>
                </button>
                <button className="w-[160px] h-[30px] bg-[#090A17] rounded-[10px] text-white mr-[20px] flex items-center justify-center">
                    <p className="text-[#93949A]">Completed</p>
                </button>
            </div> */}
                <div className="w-full flex justify-between">
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
                <div className="w-full mt-[50px] flex items-center justify-center">
                    <Button1
                        name="View More"
                        width="120px"
                        height="30px"
                    />
                </div>
            </div>
        </div>
    );
};
