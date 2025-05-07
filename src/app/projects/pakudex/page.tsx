export default function Pakudex() {
  return (
    <div className="container mx-auto flex flex-col justify-center gap-1 p-2 text-primary">
      <h1 className="mt-6 self-center text-4xl">Pakudex</h1>
      <h2 className="text-xl font-semibold">Project Description:</h2>
      <p className="indent-6 text-secondary">
        Pakudex is a creature tracking system implemented in Python that allows
        users to manage and evolve their collection of Pakuri creatures. Each
        Pakuri has unique stats (attack, defense, and speed) that are calculated
        based on their species name, and they can be evolved to become stronger.
        The project implements a command-line interface that enables users to
        interact with their Pakudex through various operations like adding new
        Pakuri, viewing stats, evolving creatures, and sorting their collection.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Features:</h2>
      <ul className="ml-6 list-outside list-disc text-secondary">
        <li>Customizable Pakudex capacity with input validation</li>
        <li>
          Add new Pakuri species with automatically calculated stats based on
          name length
        </li>
        <li>
          View detailed statistics (Attack, Defense, Speed) for each Pakuri
        </li>
        <li>
          Evolution system that multiplies creature stats (Attack ×2, Defense
          ×4, Speed ×3)
        </li>
        <li>Sorting functionality to organize Pakuri by species name</li>
        <li>List view of all captured Pakuri species</li>
        <li>Duplicate species detection to maintain unique collections</li>
        <li>Interactive command-line menu interface with error handling</li>
      </ul>
    </div>
  );
}
