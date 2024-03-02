export default function SetupStep1(){
    const years = [];
    for (let year = 1990; year <= 2024; year++) {
      years.push(<option key={year} value={year}>{year}</option>);
    }

    const nums = [];
    for (let num = 0; num <= 100; num++) {
      nums.push(<option key={num} value={num}>{num}</option>);
    }

    function nextStep(){
        // Save data to cookies and move on to step-2
    }

    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">
                <img src="/logo.svg" className="pb-4" width="20%"></img>
                <p className="text-gray-500 big-text">STEP 1 OF 3</p>
                <h1 className="big-text text-4xl pt-2">Your current vehicle</h1>

                <p className="pt-4 pb-2">1. Please specify the make and model of your current vehicle</p>
                <div className="flex">
                    <input placeholder="Search for a vehicle" className="border-2 border-gray-400 rounded-lg bg-theme-bg p-4 w-1/3"></input>
                    <img src="/search.svg" className="-m-10" width="2%"></img>
                </div>

                <p className="pt-4 pb-2">2. In what year did you purchase your current vehicle?</p>
                <div className="flex">
                    <select type="dropdown" className="border-2 border-gray-400 rounded-lg bg-theme-bg p-4 w-1/3">
                        {years}
                    </select>
                </div>

                <p className="pt-4 pb-2">3. How many times per year do you perform maintenance or repairs on your current vehicle?</p>
                <div className="flex">
                    <select type="dropdown" className="border-2 border-gray-400 rounded-lg bg-theme-bg p-4 w-1/3">
                        {nums}
                    </select>
                </div>

                <div className="py-10"></div>
                <div className="bg-theme-btn rounded-lg py-4 px-8 text-white w-fit cursor-pointer z-10" onClick={nextStep}>Next step</div>
                <div className="h-40 w-full"></div>

            </div>
            <img src="/step1-img-right.png" className="fixed top-0 right-0 h-full"></img>
            <img src="/red-triangle.svg" className="absolute -bottom-40 left-0 -z-5"></img>
        </div>
    )
}