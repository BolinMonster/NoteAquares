import React from "react";

/**
 * Composant NoteCard pour afficher une note individuelle.
 * @param {Object} note - Les détails de la note à afficher.
 * @param {Function} onLike - La fonction de rappel pour gérer le "J'aime".
 * @param {Function} onDislike - La fonction de rappel pour gérer le "Je n'aime pas".
 * @param {Function} onDelete - La fonction de rappel pour supprimer la note.
 */
export function NoteCard({
  note,
  onLike,
  onDislike,
  onDelete,
  onTitleEdit,
  onContentEdit,
}) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 p-4 m-1 rounded shadow-md text-black dark:text-white relative">
      {/* Bouton de suppression */}
      <button
        className="absolute top-1 right-1 text-red-600 cursor-pointer"
        onClick={onDelete}
      >
        ❌
      </button>
      {/* Affichage du titre de la note */}
      <h3
        className="text-lg font-semibold mb-2"
        contentEditable
        onBlur={onTitleEdit}
        suppressContentEditableWarning={true}
      >
        {note?.title ?? null}
      </h3>
      {/* Affichage du contenu de la note */}
      <p
        className="mb-2"
        contentEditable
        onBlur={onContentEdit}
        suppressContentEditableWarning={true}
      >
        {note?.content ?? null}
      </p>
      {/* Bouton "J'aime" avec le nombre de likes */}
      <button
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        onClick={onLike}
      >
        👍 {note?.likes}
      </button>
      {/* Bouton "Je n'aime pas" avec le nombre de dislikes */}
      <button
        className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500 ml-2"
        onClick={onDislike}
      >
        👎 {note?.dislikes}
      </button>
      {/* Affichage de la date de la note */}
      <p className="text-gray-600 text-sm mb-2">{note?.date ?? null}</p>
    </div>
  );
}
