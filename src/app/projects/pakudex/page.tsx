export default function Pakudex() {
  return (
    <div className="flex flex-col justify-center text-primary p-2 container mx-auto gap-1">
      <h1 className="text-4xl mt-6 self-center">Pakudex</h1>
      <h2 className="text-xl font-semibold">Project Description:</h2>
      <p className="text-secondary indent-6">
        Pakudex is a creature tracking system implemented in Python that allows
        users to manage and evolve their collection of Pakuri creatures. Each
        Pakuri has unique stats (attack, defense, and speed) that are calculated
        based on their species name, and they can be evolved to become stronger.
        The project implements a command-line interface that enables users to
        interact with their Pakudex through various operations like adding new
        Pakuri, viewing stats, evolving creatures, and sorting their collection.
      </p>

      <h2 className="text-xl font-semibold mt-6">Features:</h2>
      <ul className="list-disc list-outside ml-6 text-secondary">
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
