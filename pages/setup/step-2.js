
import Link from 'next/link';

export default function SetupStep2(){

    function nextStep(){
        // Save data to cookies and move on to step-3
    }

    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">
                <img src="/logo.svg" className="pb-4" width="20%"></img>
                <p className="text-gray-500 big-text">STEP 2 OF 3</p>
                <h1 className="big-text text-4xl pt-2">Your Driving Habits</h1>

                <p className="pt-4 pb-2">1. What is your average daily commute (in miles)?</p>
                <div className="flex">
                    <input placeholder="Input number" className="border-2 border-gray-400 rounded-lg bg-theme-bg p-4 w-1/3"></input>
                    <img src="/search.svg" className="-m-10" width="2%"></img>
                </div>

                <p className="pt-4 pb-2">2. Do you primarily live is urban, suburban, or rural areas?</p>
                <div className="flex">
                    <select className="border-2 border-gray-400 rounded-lg bg-theme-bg p-4 w-1/3">
                        <option value="urban">Urban</option>
                        <option value="suburban">Suburban</option>
                        <option value="rural">Rural</option>
                    </select>
                </div>

                <p className="pt-4 pb-2">3. How often do you embark on long-distance trips (e.g., road trips)?</p>
                <div className="flex">
                    <select className="border-2 border-gray-400 rounded-lg bg-theme-bg p-4 w-1/3">
                        <option value="under1">Less than once a year</option>
                        <option value="one">Once a year</option>
                        <option value="more1">More than once a year</option>
                    </select>
                </div>

                <p className="pt-4 pb-2">4. How do you use your vehicle? Select all that apply.</p>
                <input type="checkbox" id="check0" value="commute"></input>
                <label for="vehicle1"> Daily Commute to Work/School</label>
                <br></br>
                <input type="checkbox" id="check1" value="errands"></input>
                <label for="vehicle2"> Running Errands (Food shopping, etc.)</label>
                <br></br>
                <input type="checkbox" id="check2" value="leisure"></input>
                <label for="vehicle3"> Leisure Activities (Shopping, dining out, entertainment)</label>
                <br></br>
                <input type="checkbox" id="check3" value="work"></input>
                <label for="vehicle3"> Business/Work-related Travel</label>
                <br></br>
                <input type="checkbox" id="check4" value="long-distance"></input>
                <label for="vehicle3"> Long-Distance Travel/Road Trips</label>

                
                


                <div className="py-10"></div>
                <Link href="/setup/step-3">
                <div className="bg-theme-btn rounded-lg py-4 px-8 text-white w-fit cursor-pointer z-10 absolute" onClick={nextStep}>Next step</div>

                </Link>

            </div>
            <img src="/step2-img-right.png" className="fixed top-0 right-0 h-full"></img>
            <img src="/red-triangle.svg" className="absolute -bottom-80 left-0 -z-5"></img>
        </div>
    )
}