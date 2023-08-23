import React from "react";

/**
 * Composant Footer pour afficher le pied de page.
 */
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 rounded-lg shadow mt-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-normal text-gray-500 sm:text-center dark:text-gray-400">
          2023 - NoteAquares
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Item 1
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Item 2
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Item 3
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Item 4
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
