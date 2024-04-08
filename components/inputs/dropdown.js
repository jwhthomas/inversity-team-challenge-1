// label: the text above the option element
// values: expects an array, or object of {value: displayedText}
// startRange: the start of a range of values (inclusive)
// endRange: the end of a range of values (inclusive)
// id: the id given to the option element

export default function DropdownInput({ label, values, startRange, endRange, id }){
    var optionList = [];

    if(!values){        
        for (let x = startRange; x <= endRange; x++) {
          optionList.push(<option key={x} value={x}>{x}</option>);
        }
    }else{
        if(Array.isArray(values)){
            values.forEach((value, x) => {
                optionList.push(<option key={x} value={value.toLowerCase()}>{value}</option>)
            });
        }else{
            Object.keys(values).forEach((k, x) => {
                optionList.push(<option key={x} value={k}>{values[k]}</option>)
            })
        }
    }

    optionList.unshift(<option value="placeholder" key="placeholder" disabled>Select an option</option>)

    return (
        <>
            <p className="pt-4 pb-2">{label}</p>

            <select type="dropdown" className="w-1/3 p-4 border-2 border-gray-400 rounded-lg bg-theme-bg" defaultValue={"placeholder"} id={id}>
                {optionList}
            </select>
        </>
    )
}