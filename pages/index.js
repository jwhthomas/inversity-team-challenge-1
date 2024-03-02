import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-theme-bg">
      <div className="pt-32 pl-48">
        <img src="/logo.svg" className="pb-10"></img>
        <h1 className="text-8xl big-text">Welcome</h1>
        <p className="py-10 w-1/3 medium-text">EVolution is a simple tool designed to help you understand the benefits of switching to Electric Vehicles (also known as EV) for your personal use</p>
        <Link href="/setup/step-1">
          <div className="bg-theme-btn rounded-lg py-4 px-8 text-white w-fit cursor-pointer z-10 absolute">Get started</div>
        </Link>
      </div>
      <img src="/home-img-right.png" className="fixed top-0 right-0"></img>
      <img src="/red-triangle.svg" className="fixed bottom-0 left-0 -z-5"></img>
    </div>
  );
}
