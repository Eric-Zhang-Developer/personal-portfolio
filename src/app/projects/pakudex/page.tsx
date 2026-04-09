export default function Pakudex() {
  return (
    <div className="mx-auto max-w-[980px] px-4 py-10 md:px-7">
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">
            ~/projects/pakudex/README.md
          </span>
          <span className="ml-auto text-[11px] text-matrix-dim">
            Python
          </span>
        </div>
        <div className="space-y-5 p-6 md:p-7">
          <h1 className="text-2xl font-bold text-matrix">Pakudex</h1>

          <div>
            <h2 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-amber">
              <span className="text-matrix-dim">{"// "}</span>Project Description
            </h2>
            <p className="max-w-[72ch] indent-6 text-matrix-text">
              Pakudex is a creature tracking system implemented in Python that
              allows users to manage and evolve their collection of Pakuri
              creatures. Each Pakuri has unique stats (attack, defense, and speed)
              that are calculated based on their species name, and they can be
              evolved to become stronger. The project implements a command-line
              interface that enables users to interact with their Pakudex through
              various operations like adding new Pakuri, viewing stats, evolving
              creatures, and sorting their collection.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[15px] font-bold uppercase tracking-wider text-amber">
              <span className="text-matrix-dim">{"// "}</span>Features
            </h2>
            <ul className="space-y-1 text-[14px] text-matrix-text">
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Customizable Pakudex capacity with input validation
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Add new Pakuri species with automatically calculated stats based
                on name length
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                View detailed statistics (Attack, Defense, Speed) for each Pakuri
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Evolution system that multiplies creature stats (Attack x2,
                Defense x4, Speed x3)
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Sorting functionality to organize Pakuri by species name
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                List view of all captured Pakuri species
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Duplicate species detection to maintain unique collections
              </li>
              <li>
                <span className="text-matrix-dim">$</span>{" "}
                Interactive command-line menu interface with error handling
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
