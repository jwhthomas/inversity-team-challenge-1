import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-theme-bg">
      <div className="pt-32 pl-48">

        <div className='pb-10'>
          <Image src="/logo.svg" alt="Evolution logo" width={275} height={100} />
        </div>

        <h1 className="text-8xl">Welcome</h1>
        <p className="w-1/3 py-10">EVolution is a simple tool designed to help you understand the benefits of switching to Electric Vehicles (also known as EV) for your personal use</p>
        
        <Link href="/setup/step-1">
          <div className="absolute z-10 px-8 py-4 text-white rounded-lg cursor-pointer bg-theme-btn w-fit">Get started</div>
        </Link>
      </div>

      <div className="fixed top-0 right-0">
        <Image src="/home-img-right.png" alt="An image of a plugged in electric vehicle." width={505} height={1024} quality={100} />
      </div>

      <div className='fixed bottom-0 left-0 -z-5'>
        <Image src="/red-triangle.svg" alt="A decorative red triangle." width={300} height={300}/>
      </div>
    </div>
  );
}
