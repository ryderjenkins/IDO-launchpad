'use client'
import Featured from "./featured/page";
import Introduce from "./introduce/page";
import Howitworks from "./howitwork/page";
import FAQ from "./FAQ/page";

export default function Dashboard() {
    return (
        <div className="flex">
            <div className="w-[1300px] m-auto xs:px-[25px]">
                <Introduce />
                <Featured />
                <Howitworks />
                <FAQ />
            </div>
        </div>

    );
};