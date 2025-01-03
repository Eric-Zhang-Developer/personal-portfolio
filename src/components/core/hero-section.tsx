export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <h1 className="text-slate-800 text-4xl">Hi, I'm Eric Zhang</h1>
      <p className="text-slate-800 text-xl">Forging robust web applications with precision and purpose</p>

      <div>
        <button className="bg-slate-800 text-white p-2">Contact Me</button>
        <button className="border border-slate-800 p-2 shadow-inner">
          Projects
        </button>
      </div>
    </div>
  );
}
