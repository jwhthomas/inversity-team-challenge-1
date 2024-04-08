import Image from 'next/image';

export default function Triange({ spaced }){
    // return (<></>)

    return (
        <div className={`-z-5 mt-24 ${spaced ? null : "absolute bottom-0"}`}>
            <Image src="/vectors/red-triangle.svg" alt="A decorative red triangle" width={300} height={300}/>
        </div>
    )

    return (
        <div className={`absolute left-0 -z-5 ${spaced ? "-bottom-40" : "bottom-0"}`}>
            <Image src="/vectors/red-triangle.svg" alt="A decorative red triangle" width={300} height={300}/>
        </div>
    )
}