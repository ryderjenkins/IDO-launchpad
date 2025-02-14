export default function DocIntroHeader({ title }: { title: string }) {
    return (
        <h1 className={`xs:text-[40px] text-[24px] text-center font-500 text-white mt-[25px] xs:mt-[71px] `}>
            {title}
        </h1>
    )
}