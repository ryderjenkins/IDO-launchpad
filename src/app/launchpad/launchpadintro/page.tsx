import Button2 from "@/app/components/button2";

export default function LaunchpadIntro() {
    return (
        <div className="flex items-center px-[40px] w-full h-[450px] border-[1px] border-[#646464] rounded-[10px] mt-[100px] backdrop-blur-lg bg-gradient-to-r bg-opacity-10 from-[#e3e3e309] to-[#e3e3e307]">
            <div>
                <h1 className="text-[48px]">
                    FUEL YOUR DREAMS, LAUNCH
                </h1>
                <h1 className="text-[60px] font-bold">TO THE MOON!</h1>
                <p className="text-[20px] w-[700px] mb-[30px]">
                    Astromove identifies the best new tokens on the Aptos and Sui networks and launches them with a refund guarantee before they are listed on exchanges. Together, let’s redefine success in the Aptos and Sui ecosystems.
                </p>
                <Button2
                    width="300px"
                    height="50px"
                    name="Apply for IDOs"
                />
            </div>
        </div>
    )
}