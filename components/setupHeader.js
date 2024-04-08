import Image from "next/image"

export default function SetupHeader({ step }){
    return (
        <>
            <div className="w-[20%] pb-4">
                <Image src="/vectors/logo.svg" height="500" width="500" alt="The evolution logo" priority />
            </div>
            <p className="font-bold text-gray-500">STEP {step} OF 3</p>
        </>
    )
}