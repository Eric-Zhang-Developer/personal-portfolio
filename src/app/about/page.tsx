export default function About() {
  return (
    <>
      <section className="flex flex-col container mx-auto items-center text-primary">
        <h1 className="text-4xl mt-6">About Me</h1>
        <p className="mt-2 text-secondary text-lg text-center p-4 lg:p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident
        </p>
        <div className="flex items-center justify-center flex-col mt-6">
          <span className="text-accent">Scroll</span>
          <div className="h-32 w-px bg-gradient-to-b from-accent
          to-transparent animate-bounce mt-8"></div>
        </div>
      </section>
    </>
  );
}
