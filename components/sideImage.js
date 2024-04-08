import Image from "next/legacy/image";

export default function SideImage({ src }) {
    return (
        <div className='fixed top-0 w-screen h-screen pointer-events-none'>
            <Image src={src} layout='fill' alt='A decorative image on the side of the page' className='object-contain object-right' priority />
        </div>
    )
}