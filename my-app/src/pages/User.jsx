import { useState } from 'react';

export default function User() {



  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez ici les données du formulaire
    alert('Formulaire soumis !');
  };

  return (
    <>
      <h1>Page Utilisateur</h1>
      <p>Bienvenue sur la page utilisateur !</p>

      <form onSubmit={handleSubmit}>
        <h2>Informations personnelles</h2>

        <label htmlFor="birth_date">Date de naissance</label>
        <input type="date" id="birth_date" name="birth_date" required />

        <label htmlFor="birth_place">Lieu de naissance</label>
        <input type="text" id="birth_place" name="birth_place" required />

        <label htmlFor="nationality">Nationalité</label>
        <input type="text" id="nationality" name="nationality" required />

        <label htmlFor="licence_id">N° Permis de conduire</label>
        <input type="text" id="licence_id" name="licence_id" required />

        <label htmlFor="licence_date">Date de  délivrance</label>
        <input type="date" id="licence_date" name="licence_date" required />

        <label htmlFor="validity">Validité</label>
        <select id="validity" name="validity">
          <option value="1">Validité 1 an</option>
          <option value="2">Validité 2 ans</option>
          <option value="3">Validité 3 ans</option>
        </select>

        <h3>Documents</h3>
        
        

        <br /><br />
        <button type="submit">Soumettre</button>
      </form>
    </>
  );
}