export default function Results(){
    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">
                <img src="/logo.svg" className="pb-4" width="20%"></img>
                <h1 className="text-6xl pt-4 big-text">The results are in...</h1>
                <div className="flex items-center pt-8">
                    <img src="/tick.svg"></img>
                    <p className="w-3/4 pl-4 text-3xl medium-text">We've analysed your responces, and we can confirm that switching to an electric vehicle (EV) would be a great decision for you. Here's why...</p>
                </div>
            </div>

                <img src="/environmental-impact-hero.png" width="100%" className="py-16"></img>
                <div className="flex justify-center">
                    <p className="w-3/4">You told us that the environment mattered to you. Well here's some good news: switching to an EV vehicle can massively reduce your carbon footprint. Take a look at the details...</p>
                </div>
                <div className="w-full flex justify-center">
                        <table>
                            <tbody>
                                <tr className="text-6xl text-theme-btn text-center">205</tr>
                                <tr className="text-xl text-theme-btn text-center">TONS</tr>
                                <tr className="text-theme-offwhite text-center">CO2 saving per year</tr>
                            </tbody>
                        </table>
                        <p className="text-8xl text-theme-offwhite">=</p>
                        <img src="/tree.svg" className="w-24 ml-4"></img>
                        <table>
                            <tbody>
                                <tr className="text-6xl text-theme-btn text-center">15</tr>
                                <tr className="text-xl text-theme-btn text-center">TREES</tr>
                                <tr className="text-theme-offwhite text-center">Worth of CO2 saved</tr>
                            </tbody>
                        </table>
                    </div>

                <img src="/financial-impact-hero.png" width="100%" className="py-16"></img>
                <div className="flex justify-center">
                    <p className="w-3/4">You told us that the environment mattered to you. Well here's some good news: switching to an EV vehicle can massively reduce your carbon footprint. Take a look at the details...</p>
                </div>
                <div className="w-full flex justify-center medium-text">
                    <img src="/pound.svg" className="w-14 mr-4"></img>
                    <div>
                        <p className="text-6xl text-theme-btn">900</p>
                        <p className="text-xl text-theme-offwhite">Cost saving per year</p>
                    </div>
                </div>
                <p className="text-theme-offwhite text-xl medium-text text-center mt-4">This means you'll make your money back in a timeframe of <span className="text-theme-btn">12 years</span>.</p>
                <div className="text-center text-theme-offwhite py-8">
                    <p className="text-2xl">Your frequently asked questions and concerns, answered.</p>
                    <p className="text-xl">Will it take ages for my car to charge?</p>
                    <p className="mb-2">No! Nyobolt’s batteries charge in just minutes – at twice the speed of the other fastest-charging vehicles on the road.</p>
                    <p className="text-xl">Will my car’s battery constantly need replacing?</p>
                    <p className="mb-2">Nyobolt’s batteries have a lifespan of more than 2,500 fast-charge cycles – enough to cover over half a million kilometres.</p>
                    <p className="text-xl">If you have any other concerns, feel free to get in touch with our experts.</p>
                </div>

            
            {/* <img src="/red-triangle.svg" className="absolute -bottom-40 left-0 -z-5"></img> */}
        </div>
    )
}