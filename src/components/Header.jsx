import teaTime from "../assets/tea-time.png";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-12">
        <div className="flex items-center">
          <img src={teaTime} alt="Tea time logo" className="w-20 " />
          <h1 className="text-center uppercase text-amber-400 text-4xl mx-6">
            Taste of the nature
          </h1>
        </div>
        <p>
          <button className="bg-lime-700 hover:bg-lime-600 text-amber-950 border-0 rounded-md py-2 px-6 text-lg cursor-pointer">
            Cart
          </button>
        </p>
      </header>
    </>
  );
}
