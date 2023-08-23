import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { NoteForm } from "../components/NoteForm";
import { NoteCardList } from "../components/NoteCardList";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Page d'accueil de l'application Note Aquares.
 */
export function Home() {
  // État local pour stocker les notes, à chaque setNotes, ça sauvegarde directement dans le local storage.
  const [notes, setNotes] = useLocalStorage("notes", []);

  // Charger les notes depuis le localStorage au démarrage de l'application
  useEffect(() => {
    const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(initialNotes);
  }, []); // [] signifie que cela ne s'exécute qu'une fois au montage

  /**
   * Ajoute une nouvelle note à la liste des notes.
   * @param {object} newNote - La nouvelle note à ajouter.
   */
  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  /**
   * Incrémente le nombre de likes pour une note donnée.
   * @param {number} index - L'index de la note à liker.
   */
  const handleLike = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].likes += 1;
    setNotes(updatedNotes);
  };

  /**
   * Incrémente le nombre de dislikes pour une note donnée.
   * @param {number} index - L'index de la note à disliker.
   */
  const handleDislike = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].dislikes += 1;
    setNotes(updatedNotes);
  };

  /**
   * Supprime une note de la liste des notes.
   * @param {number} index - L'index de la note à supprimer.
   */
  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  /**
   * Gère la modification du titre d'une note éditable.
   * Met à jour le titre de la note dans la liste des notes.
   * @param {Event} event - L'événement de modification du contenu éditable.
   */
  const handleTitleEdit = (event) => {
    const updatedNote = { ...notes, title: event.target.innerText };
    setNotes(updatedNote);
  };

  /**
   * Gère la modification du contenu d'une note éditable.
   * Met à jour le contenu de la note dans la liste des notes.
   * @param {Event} event - L'événement de modification du contenu éditable.
   */
  const handleContentEdit = (event) => {
    const updatedNote = { ...notes, content: event.target.innerText };
    setNotes(updatedNote);
  };

  return (
    <>
      <main className="bg-gray-100 dark:bg-slate-900 min-h-screen py-8">
        <div className="bg-white dark:bg-slate-800 mx-auto max-w-md p-6 rounded shadow-lg mb-2">
          <h1 className="text-3xl font-semibold mb-4 text-center text-black dark:text-white">
            Note Aquares
          </h1>
          <div>
            <NoteForm onAddNote={handleAddNote} />
          </div>
        </div>
        <NoteCardList
          notes={notes}
          handleLike={handleLike}
          handleDislike={handleDislike}
          handleDelete={handleDelete}
          handleTitleEdit={handleTitleEdit}
          handleContentEdit={handleContentEdit}
        />
        <Footer />
      </main>
    </>
  );
}
