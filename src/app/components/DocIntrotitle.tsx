export default function DocIntroTitle({ title }: { title: string }) {
    return (
        <h1 className="xs:text-[24px] text-[14px] font-300 text-white xs:w-full w-[92vw] xs:mt-[71px] mt-[25px]">
            {title}
        </h1>
    )
}
