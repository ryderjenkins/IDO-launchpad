export default function DocIntroTitle({ title, margintop }: { title: string, margintop: string }) {
    return (
        <h1 className="xs:text-[24px] text-[14px] font-300 text-white w-full" style={{ marginTop: margintop }}>
            {title}
        </h1>
    )
}