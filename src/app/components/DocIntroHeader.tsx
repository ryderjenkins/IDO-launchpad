export default function DocIntroHeader({ title, margintop }: { title: string, margintop: string }) {
    return (
        <h1 className="text-[40px] text-center font-500 text-white" style={{ marginTop: margintop }}>
            {title}
        </h1>
    )
}