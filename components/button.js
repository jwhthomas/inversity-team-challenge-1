import Link from "next/link"

export default function Button({ className, onClickHandler, text, href }){

    const classData = `\px-8 py-4 text-white rounded-lg cursor-pointer bg-theme-btn w-fit select-none ${className}`

    if(href && onClickHandler) {
        return (
            <Link href={href}>
                <div className={classData} onClick={onClickHandler}>{text}</div>
            </Link>
        )
    }

    if(onClickHandler) {
        return (
            <div className={classData} onClick={onClickHandler}>{text}</div>
        )
    }

    if(href) {
        return (
            <Link href={href}>
                <div className={classData}>{text}</div>
            </Link>
        )
    }

    if(!href && !onClickHandler) {
        return (
            <div className={classData}>{text}</div>
        )
    }

    //             <div className="absolute z-10 px-8 py-4 text-white rounded-lg cursor-pointer bg-theme-btn w-fit">Next step</div>

}