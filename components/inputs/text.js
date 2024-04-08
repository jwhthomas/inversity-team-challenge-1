import Image from "next/image"

// label: the text above the text input
// search: true or false, whether the search icon should be shown
// searchData: the data that can be selected from search (TODO)
// id: the id given to the text input
// placeholder: the placeholder for the text input

export default function TextInput({ label, search, searchData, id, placeholder }){
    return (
        <>
            <p className="pt-4 pb-2">{label}</p>

            <div className="flex items-center">
                <input placeholder={placeholder} className="w-1/3 p-4 border-2 border-gray-400 rounded-lg bg-theme-bg" id={id}></input>
                {
                    search ?
                        <div className="w-[2%] -ml-10">
                            <Image src="/vectors/search.svg" width="500" height="500" alt="A search icon" />
                        </div>
                    :
                        null
                }

            </div>
        </>
    )
}