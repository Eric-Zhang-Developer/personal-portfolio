export default function Minesweeper() {
  return (
    <div className="container mx-auto flex flex-col justify-center gap-1 p-2 text-primary">
      <h1 className="mt-6 self-center text-4xl">Minesweeper</h1>
      <h2 className="text-xl font-semibold">Project Description:</h2>
      <p className="indent-6 text-secondary">
        This is an enhanced implementation of the classic Minesweeper game,
        developed in C++ using the SFML (Simple and Fast Multimedia Library)
        framework. This project was created as my Programming 2 class (COP3503)
        final project. After completing the project to my class&apos;
        specifications, I later implemented more features such as sound effects
        after completing it to the class specifications.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Features:</h2>
      <ul className="ml-6 list-outside list-disc text-secondary">
        <li>Welcome window to input name</li>
        <li>Graphical user interface using SFML</li>
        <li>Customizable board size and mine count (via config file)</li>
        <li>Debug mode to reveal mine locations</li>
        <li>Flagging system to mark potential mine locations</li>
        <li>Timer to track game duration</li>
        <li>Pause/Resume functionality</li>
        <li>Leaderboard system to track best times</li>
        <li>Sound effects for various game actions</li>
      </ul>
    </div>
  );
}
