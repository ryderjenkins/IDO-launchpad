'use client'
export default function Loading() {
    console.log('Loading...')
    return (
        <div className="absolute left-0 top-0 items-center justify-center h-screen z-[100] w-full bg-black">
            <div className="w-full h-full flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 flex justify-center items-center border-[#27B17D]">
                </div>
                <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
                    <h1 className="text-30px animate-pulse">Loading...</h1>
                </div>

            </div>
        </div>
    )
}