export default function state_btn({ name }: { name: string }) {
    return (
        <button className="w-[160px] h-[30px] bg-[#090A17] rounded-[10px] text-white mr-[20px]">
            <p className="text-[#93949A]">{name}</p>
        </button>
    )
}