import React from "react";
import { NoteCard } from "./NoteCard";

/**
 * Composant NoteCardList pour afficher la liste de notes.
 * @param {Array} notes - La liste des notes à afficher.
 * @param {Function} handleLike - La fonction de rappel pour gérer le "J'aime".
 * @param {Function} handleDislike - La fonction de rappel pour gérer le "Je n'aime pas".
 * @param {Function} handleDelete - La fonction de rappel pour supprimer une note.
 */
export function NoteCardList({
  notes,
  handleLike,
  handleDislike,
  handleDelete,
  handleTitleEdit,
  handleContentEdit,
}) {
  // Vérifie si la liste de notes est vide
  if (notes.length <= 0) {
    return <></>; // Renvoie un fragment vide s'il n'y a pas de notes
  }

  return (
    <div className="bg-white dark:bg-slate-800 mx-auto max-w-3xl p-6 rounded shadow-lg">
      <div className="bg-white dark:bg-slate-700 flex flex-wrap p-4 rounded shadow-md text-black dark:text-white">
        {/* Boucle à travers chaque note dans la liste */}
        {notes.map((note, index) => (
          <NoteCard
            id={"card_" + index}
            key={index}
            note={note}
            onLike={() => handleLike(index)}
            onDislike={() => handleDislike(index)}
            onDelete={() => handleDelete(index)}
            onTitleEdit={() => handleTitleEdit(index)}
            onContentEdit={() => handleContentEdit(index)}
          />
        ))}
      </div>
    </div>
  );
}
