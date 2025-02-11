export default function DocIntroTitle({ title, margintop }: { title: string, margintop: string }) {
    return (
        <h1 className="text-[24px] font-300 text-white w-full" style={{ marginTop: margintop }}>
            {title}
        </h1>
    )
}