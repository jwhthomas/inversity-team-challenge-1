import SetupHeader from '@/components/setupHeader';
import TextInput from '@/components/inputs/text';
import DropdownInput from '@/components/inputs/dropdown';
import Triange from '@/components/triangle';
import SideImage from '@/components/sideImage';
import Button from '@/components/button';
import { setCookie, hasCookie, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function SetupStep1(){

    const router = useRouter()
    const questions = ["makeModel", "purchaseYear", "maintenanceRegularity"]

    function nextStep(){

        var newData = {}

        questions.forEach(question => {
            var value = document.getElementById(question).value
            if(value !== "" && value !== "placeholder"){
                newData[question] = value
            }
        });

        if(Object.keys(newData).length !== questions.length){
            return
        }

        if(hasCookie("config")) deleteCookie("config")
        setCookie("config", newData)

        router.push("/setup/step-2")
        
    }

    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">
                
                <SetupHeader step="1" />
                
                <h1 className="pt-2 text-4xl">Your current vehicle</h1>

                <TextInput label="1. Please specify the make and model of your current vehicle" id="makeModel" placeholder="Search for a vehicle" search />

                <DropdownInput label="2. In what year did you purchase your current vehicle?" startRange={1990} endRange={2024} id="purchaseYear" />

                <DropdownInput label="3. How many times per year do you perform maintenance or repairs on your current vehicle?" startRange={0} endRange={100} id="maintenanceRegularity" />

                <Button text="Next Step" className="absolute z-10 my-20" onClickHandler={nextStep} />

            </div>
            <SideImage src="/images/setup/step1-right.png" />
            <Triange spaced />
        </div>
    )
}