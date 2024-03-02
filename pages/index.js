export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#011F45]">
      <div className="pt-32 pl-48">
        <img src="./logo.svg" className="pb-10"></img>
        <h1 className="text-8xl">Welcome</h1>
        <p className="py-10">This is where the text will go</p>
        <button className="bg-[#FF4638] rounded-lg text-black py-4 px-8 text-white">This is a button</button>
      </div>
      <img src="./home-img-right.png" className="fixed top-0 right-0"></img>
      <img src="./red-triangle.svg" className="fixed bottom-0 left-0"></img>
    </div>
  );
}
