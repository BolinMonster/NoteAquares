import React, { useState } from "react";

/**
 * Composant NoteForm pour ajouter une nouvelle note.
 * @param {Function} onAddNote - La fonction de rappel pour ajouter une note.
 */
export function NoteForm({ onAddNote }) {
  // États pour le titre et le contenu de la note
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Gère l'ajout d'une nouvelle note
  const handleAddNote = () => {
    // Vérifie si le titre et le contenu sont non vides
    if (title && content) {
      // Crée un nouvel objet de note avec les détails
      const newNote = {
        title,
        content,
        date: new Date().toLocaleString(),
        likes: 0,
        dislikes: 0,
      };
      // Appelle la fonction de rappel pour ajouter la note
      onAddNote(newNote);
      // Réinitialise les états de titre et de contenu
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-700 p-4 rounded shadow-md text-black dark:text-white">
      <h2 className="text-xl mb-2">Ajouter une note</h2>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Titre
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contenu
        </label>
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleAddNote}
      >
        Ajouter
      </button>
    </div>
  );
}
