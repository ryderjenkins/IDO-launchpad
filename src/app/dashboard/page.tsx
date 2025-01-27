'use client'
import Featured from "./featured/page";
import Introduce from "./introduce/page";
import Howitworks from "./howitwork/page";
import FAQ from "./FAQ/page";

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="w-[1500px] m-auto 2xl:mt-[130px] mt-[50px] px-[30px]">
                <Introduce />
                <Featured />
                <Howitworks />
                <FAQ />
            </div>
        </div>

    );
};