import Image from "next/image"

export default function Results(){
    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">
                <img src="/logo.svg" className="pb-4" width="20%"></img>
                <h1 className="pt-4 text-6xl big-text">The results are in...</h1>
                <div className="flex items-center pt-8">
                    <img src="/tick.svg"></img>
                    <p className="w-3/4 pl-4 text-3xl medium-text">We&apos;ve analysed your responces, and we can confirm that switching to an electric vehicle (EV) would be a great decision for you. Here&apos;s why...</p>
                </div>
            </div>

                {/* <img src="/environmental-impact-hero.png" width="100%" className="py-16"></img> */}
                <Image src="/environmental-impact-hero.png" alt="The header image for the environmental result section" width={1440} height={377} className="py-16"></Image>
                <div className="flex justify-center">
                    <p className="w-3/4">You told us that the environment mattered to you. Well here&apos;s some good news: switching to an EV vehicle can massively reduce your carbon footprint. Take a look at the details...</p>
                </div>
                <div className="flex justify-center w-full">
                        <table>
                            <tbody>
                                <tr className="text-6xl text-center text-theme-btn">205</tr>
                                <tr className="text-xl text-center text-theme-btn">TONS</tr>
                                <tr className="text-center text-theme-offwhite">CO2 saving per year</tr>
                            </tbody>
                        </table>
                        <p className="text-8xl text-theme-offwhite">=</p>
                        <img src="/tree.svg" className="w-24 ml-4"></img>
                        <table>
                            <tbody>
                                <tr className="text-6xl text-center text-theme-btn">15</tr>
                                <tr className="text-xl text-center text-theme-btn">TREES</tr>
                                <tr className="text-center text-theme-offwhite">Worth of CO2 saved</tr>
                            </tbody>
                        </table>
                    </div>

                {/* <img src="/financial-impact-hero.png" width="100%" className="py-16"></img> */}
                <Image src="/financial-impact-hero.png" alt="The header image for the financial result section" width={1440} height={377} className="py-16"></Image>
                <div className="flex justify-center">
                    <p className="w-3/4">You told us that the environment mattered to you. Well here&apos;s some good news: switching to an EV vehicle can massively reduce your carbon footprint. Take a look at the details...</p>
                </div>
                <div className="flex justify-center w-full medium-text">
                    <img src="/pound.svg" className="mr-4 w-14"></img>
                    <div>
                        <p className="text-6xl text-theme-btn">900</p>
                        <p className="text-xl text-theme-offwhite">Cost saving per year</p>
                    </div>
                </div>
                <p className="mt-4 text-xl text-center text-theme-offwhite medium-text">This means you&apos;ll make your money back in a timeframe of <span className="text-theme-btn">12 years</span>.</p>
                <div className="py-8 text-center text-theme-offwhite">
                    <p className="text-2xl">Your frequently asked questions and concerns, answered.</p>
                    <p className="text-xl">Will it take ages for my car to charge?</p>
                    <p className="mb-2">No! Nyobolt&apos;s batteries charge in just minutes &ndash; at twice the speed of the other fastest-charging vehicles on the road.</p>
                    <p className="text-xl">Will my car&apos;s battery constantly need replacing?</p>
                    <p className="mb-2">Nyobolt&apos;s batteries have a lifespan of more than 2,500 fast-charge cycles &ndash; enough to cover over half a million kilometres.</p>
                    <p className="text-xl">If you have any other concerns, feel free to get in touch with our experts.</p>
                </div>

            
            {/* <img src="/red-triangle.svg" className="absolute left-0 -bottom-40 -z-5"></img> */}
        </div>
    )
}