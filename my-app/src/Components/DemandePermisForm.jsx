import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NationalitySelect from "./NationalitySelect";

export default function DemandePermisForm({ user, onCancel, onSubmit }) {



  const { token, setUser } = useContext(AuthContext);

  const [form, setForm] = useState({

    birth_date: user?.birth_date ||"",
    birth_place: user?.birth_place ||"",
    licence_id: user?.licence_id || "",
    nationality: user?.nationality || "",
    validity: user?.validity || "",
    licence_date: user?.licence_date || "",
    licence_category: user?.licence_category || "",
    
    
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toISOString().split("T")[0];
 };

 const updateUserInfo = async (updatedData) => {
    try {

        console.log(token)
        const response = await fetch("http://localhost:3000/users/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedData),
        });

        const updatedUser = await response.json();
        console.log("Utilisateur mis à jour :", updatedUser);
        
        setUser(updatedUser);
        onCancel();
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    }
};

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form)
        updateUserInfo(form)
        onSubmit("demande permis");
      }}
      className="space-y-4 border p-4 rounded-md shadow"
    >
      <h3 className="text-lg font-bold">Vérifiez vos informations</h3>

      <div>
        <label>Nom :</label>
        <input
          type="text"
          value={user?.lname || ""}
          readOnly
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={user?.fname || ""}
          readOnly
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>N° Permis :</label>
        <input
          type="text"
          value={user?.licence_id || ""}
          readOnly
          className="border p-2 w-full"
        />
      </div> 

      <div>
        <label className="block mb-1">Catégorie :</label>

        <select
              name="licence_category"
              className="border p-2 w-full"
              value={form.licence_category}
              onChange={handleChange}
              required
            >
              <option value="">Choisir une catégorie</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
        </select>
        {/* <input
          type="text"
          name="licence_category"
          value={form.licence_category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        /> */}
      </div>

      <div>
        <label className="block mb-1">Date de delivrance Permis :</label>
        <input
          type="date"
          name="licence_date"
          value={formatDate(form.licence_date)}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
       </div>

       <div>
        <label className="block mb-1">Date de naissance :</label>
        <input
          type="date"
          name="birth_date"
          value={formatDate(form.birth_date)}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
       </div>


      <div>
        <label className="block mb-1">Lieu de naissance :</label>
        <input
          type="text"
          name="birth_place"
          value={form.birth_place}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>


      <div>

        <NationalitySelect  form={form} handleChange={handleChange}/>
        {/* <label className="block mb-1">Nationalité :</label>
        <input
          type="text"
          name="nationality"
          value={form.nationality}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        /> */}
      </div>

      <div>
        <label className="block mb-1">Validité du permis :</label>
        <input
          type="text"
          name="validity"
          value={form.validity}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>


      <div className="flex space-x-4">
        <Button type="submit">Valider ma demande</Button>
        <Button type="button" onClick={onCancel} variant="outline">
          Annuler
        </Button>
      </div>
    </form>
  );
}
