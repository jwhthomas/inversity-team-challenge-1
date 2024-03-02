import Link from 'next/link';


export default function SetupStep2(){

    function nextStep(){
        // Save data to cookies and move on to step-3
    }

    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">
                <img src="/logo.svg" className="pb-4" width="20%"></img>
                <p className="text-gray-500 big-text">STEP 3 OF 3</p>
                <h1 className="big-text text-4xl pt-2">Your Preferences</h1>

                <p className="pt-4 pb-2 w-1/3">It's getting exciting: you've made it to the final step! How important are the following factors to you?</p>

                <p className="pt-8 pb-2">Environmental impact</p>
                <input type="range" min="1" max="10" class="slider" id="envImpact" className="w-96"></input>

                <p className="pt-8 pb-2">Cost savings</p>
                <input type="range" min="1" max="10" class="slider" id="costSav" className="w-96"></input>

                <p className="pt-8 pb-2">Range (distance without needing charging)</p>
                <input type="range" min="1" max="10" class="slider" id="range" className="w-96"></input>


                <div className="py-10"></div>
                <Link href="/results">
                <div className="bg-theme-btn rounded-lg py-4 px-8 text-white w-fit cursor-pointer z-10 absolute" onClick={nextStep}>Next step</div>

                </Link>

            </div>
            <img src="/step3-img-right.png" className="fixed top-0 right-0 h-full"></img>
            <img src="/red-triangle.svg" className="absolute -bottom-80 left-0 -z-5"></img>
        </div>
    )
}