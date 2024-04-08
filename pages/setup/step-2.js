import DropdownInput from '@/components/inputs/dropdown';
import TextInput from '@/components/inputs/text';
import SetupHeader from '@/components/setupHeader';
import SideImage from '@/components/sideImage';
import Triange from '@/components/triangle';
import Button from '@/components/button';
import { setCookie, hasCookie, getCookie } from 'cookies-next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CheckboxInput from '@/components/inputs/checkboxes';

export default function SetupStep2(){
    
    const boxes = [
        {
            value: "commuting",
            text: "Daily commute to Work/School"
        },
        {
            value: "errands",
            text: "Running Errands (Food shopping, etc.)"
        },
        {
            value: "leisure",
            text: "Leisure Activities (Shopping, dining out, entertainment)"
        },
        {
            value: "work",
            text: "Business/Work-related Travel"
        },
        {
            value: "longDistance",
            text: "Long-Distance Travel/Road Trips"
        }
    ]

    const router = useRouter()
    const questions = ["dailyCommute", "livingArea", "longDistanceRegularity"]
    
    boxes.forEach(box => {
        questions.push(box.value)
    })

    useEffect(() => {
        if(!hasCookie("config")) router.push("/setup/step-1")
    }, [router])

    function nextStep(){

        var newData = {
            usecases: {
                
            }
        }

        questions.forEach((question, x) => {
            if(x >= 3) {
                var value = document.getElementById(question).checked
                console.log(question, x, value)
                newData["usecases"][question] = value
            }else{
                var value = document.getElementById(question).value
                if(value !== "" && value !== "placeholder"){
                    newData[question] = value
                }
            }
        });

        if(Object.keys(newData).length !== 4){
            return
        }

        var orignalData = JSON.parse(getCookie("config"))
        console.log(newData)
        
        newData = Object.assign(newData, orignalData)

        setCookie("config", newData)

        router.push("/setup/step-3")

    }

    return (
        <div className="w-screen h-screen bg-theme-bg">
            <div className="pt-32 pl-48">

                <SetupHeader step="2" />

                <h1 className="pt-2 text-4xl big-text">Your Driving Habits</h1>

                <TextInput label="1. What is your average daily commute (in miles)?" placeholder="Enter a number" id="dailyCommute" />

                <DropdownInput values={["Urban", "Suburban", "Rural"]} label="2. Do you primarily live is urban, suburban, or rural areas?" id="livingArea" />

                <DropdownInput values={{ "lessThanOnce": "Less than once a year", "once": "Once a year", "moreThanOnce": "More than once a year" }} label="3. How often do you embark on long-distance trips (e.g., road trips)?" id="longDistanceRegularity" />

                <CheckboxInput label="4. How do you use your vehicle? Select all that apply." boxes={boxes} />

                <Button text="Next Step" className="absolute z-10 my-20" onClickHandler={nextStep} />

            </div>
            <SideImage src="/images/setup/step2-right.png" />
            <Triange spaced />
        </div>
    )
}