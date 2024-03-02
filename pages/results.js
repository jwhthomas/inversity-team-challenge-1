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
                    <div className="w-3/4"></div>
                </div>

                <img src="/financial-impact-hero.png" width="100%" className="py-16"></img>
                <div className="flex justify-center">
                    <p className="w-3/4">You told us that the environment mattered to you. Well here's some good news: switching to an EV vehicle can massively reduce your carbon footprint. Take a look at the details...</p>
                </div>


            {/* <img src="/red-triangle.svg" className="absolute -bottom-40 left-0 -z-5"></img> */}
        </div>
    )
}