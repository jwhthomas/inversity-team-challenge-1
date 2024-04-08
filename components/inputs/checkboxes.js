export default function CheckboxInput({ label, boxes }) {

    var checkboxes = []

    boxes.forEach((box, x) => {
        checkboxes.push(
            <div key={x} className="flex items-center my-2">
                <input type="checkbox" id={box.value} value={box.value} name={box.value} className="w-6 h-6" />
                <label htmlFor={box.value} className="ml-2">{box.text}</label>
            </div>
        )
    });


    return (
        <>
            <p className="pt-4 pb-2">{label}</p>
            
            {checkboxes}
        </>
    )
}