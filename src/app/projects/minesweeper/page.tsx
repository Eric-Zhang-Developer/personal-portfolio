export default function Minesweeper() {
  return (
    <div className="flex flex-col justify-center text-primary p-2 container mx-auto gap-1">
      <h1 className="text-4xl mt-6 self-center">Minesweeper</h1>
      <h2 className="text-xl font-semibold">Project Description:</h2>
      <p className="text-secondary indent-6">
        This is an enhanced implementation of the classic Minesweeper game,
        developed in C++ using the SFML (Simple and Fast Multimedia Library)
        framework. This project was created as my Programming 2 class (COP3503)
        final project. After completing the project to my class&apos; specifications,
        I later implemented more features such as sound effects after completing
        it to the class specifications.
      </p>

      <h2 className="text-xl font-semibold mt-6">Features:</h2>
      <ul className="list-disc list-outside ml-6 text-secondary">
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
