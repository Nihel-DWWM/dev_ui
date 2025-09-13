import { useEffect, useState } from "react";
export default function NationalitySelect({ form, setForm,handleChange }) {
  const [nationalities, setNationalities] = useState([]);

   useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,translations")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const names = data
            .map((country) => country.translations?.fra?.common || country.name.common)
            .filter(Boolean)
            .sort();
          setNationalities(names);
        } else {
          console.error("Réponse inattendue de l'API :", data);
        }
      })
      .catch((err) => console.error("Erreur lors du chargement des nationalités :", err));
    }, []);


  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Nationalité
      </label>
      <select
        name="nationality"
        className="w-full border rounded-xl p-2"
        value={form.nationality}
        onChange={handleChange}
        required
      >
        <option value="">-- Sélectionnez une nationalité --</option>
        {nationalities.map((nation, idx) => (
          <option key={idx} value={nation}>
            {nation}
          </option>
        ))}
      </select>
    </div>
  );
}