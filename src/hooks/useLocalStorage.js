import React, { useState, useEffect } from "react";

/**
 * Un hook personnalisé pour gérer les valeurs dans le localStorage.
 *
 * @param {string} key - La clé sous laquelle enregistrer la valeur dans le localStorage.
 * @param {any} initialValue - La valeur initiale à utiliser si aucune valeur n'est trouvée dans le localStorage.
 * @returns {[any, function]} - Un tableau contenant la valeur stockée et la fonction pour la mettre à jour.
 */
export function useLocalStorage(key, initialValue) {
  // Utilise useState pour gérer la valeur stockée
  const [storedValue, setStoredValue] = useState(() => {
    // Récupére la valeur à partir du localStorage (si elle existe)
    const item = localStorage.getItem(key);
    // Retourne la valeur parsée ou l'initialValue si non trouvée
    return item ? JSON.parse(item) : initialValue;
  });

  // Utilise useEffect pour mettre à jour le localStorage lorsque la valeur change
  useEffect(() => {
    // Enregistre la valeur dans le localStorage
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  // Retourne la valeur stockée et la fonction pour la mettre à jour
  return [storedValue, setStoredValue];
}
