export default function Minesweeper() {
  return (
    <div className="mx-auto max-w-[980px] px-4 py-10 md:px-7">
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">
            ~/projects/minesweeper/README.md
          </span>
          <span className="ml-auto text-[11px] text-matrix-dim">
            C++ &middot; SFML &middot; STL
          </span>
        </div>
        <div className="space-y-5 p-6 md:p-7">
          <h1 className="text-2xl font-bold text-matrix">Minesweeper</h1>

          <div>
            <h2 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-amber">
              <span className="text-matrix-dim">{"// "}</span>Project Description
            </h2>
            <p className="max-w-[72ch] indent-6 text-matrix-text">
              This is an enhanced implementation of the classic Minesweeper game,
              developed in C++ using the SFML (Simple and Fast Multimedia Library)
              framework. This project was created as my Programming 2 class
              (COP3503) final project. After completing the project to my
              class&apos; specifications, I later implemented more features such
              as sound effects after completing it to the class specifications.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-amber">
              <span className="text-matrix-dim">{"// "}</span>Features
            </h2>
            <ul className="space-y-1 text-[14px] text-matrix-text">
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Welcome window to input name
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Graphical user interface using SFML
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Customizable board size and mine count (via config file)
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Debug mode to reveal mine locations
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Flagging system to mark potential mine locations
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Timer to track game duration
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Pause/Resume functionality
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Leaderboard system to track best times
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Sound effects for various game actions
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
