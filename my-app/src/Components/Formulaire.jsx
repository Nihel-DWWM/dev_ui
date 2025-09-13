import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NationalitySelect from "./NationalitySelect";

export default function Formulaire() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  //const navigate = useNavigate();
  const emptyForm = {
    email: "",
    password: "",
    fname: "",
    lname: "",
    birth_date: "",
    birth_place: "",
    nationality: "",
    validity: "",
    licence_date: "",
    licence_id: "",
    licence_category: "",
    documents: "",
  };

  const [form, setForm] = useState(emptyForm);

  const [files, setFiles] = useState([]);

  const fetchData = async () => {
    try {
      const formData = new FormData();
      // Ajoute chaque champ du formulaire
      for (const key in form) {
        formData.append(key, form[key]);
      }
      // Ajoute le fichier s'il existe

      if (files && files.length) {
        for (let i = 0; i < files.length; i++) {
          formData.append("documents", files[i]);
        }
      }

      // if (file) {
      //   formData.append('documents', file);
      // }
      const response = await fetch("http://localhost:3000/users/add", {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: formData,

      });
      if (response.ok) {
        toast.success("🎉 Compte créé avec succès !");

        
        setForm(emptyForm);
        // console.log(response);
        navigate("/login");

      } else {

        let errors = await response.json()

         //const errorData = await response.json();
         toast.error("❌ Erreur: " + errors.message);
       
        //toast.error("❌ Une erreur est survenue.");
        
        console.log(errors);
        // console.log(errors[0])
         
        
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      alert("Une erreur est survenue.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleChangeFile = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   setFiles(selectedFiles); // Utilisation de e.target.files pour obtenir le fichier sélectionné
  //   console.log(selectedFiles); // Affiche les fichiers sélectionnés dans la console
  // };

  const handleChangeFile = (e) => {
  const selectedFiles = Array.from(e.target.files); // convert FileList en array
  setFiles((prevDocs) => [...prevDocs, ...selectedFiles]); // concatène dans le state
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(files);
    setSubmitted(true);
    // console.log(form);
    fetchData(form); // Appel de la fonction fetchData avec les données du formulaire
  };

  // Réinitialiser le statut de soumission à chaque changement
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold text-center mt-8">
          Formulaire d'inscription
        </h1>

        <br />

        <form
          className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-semibold text-gray-700">
            Créer un Compte
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block font-medium text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border rounded-xl p-2"
                value={form.email}
                onChange={handleChange}
               
                
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                className="w-full border rounded-xl p-2"
                value={form.password}
                onChange={handleChange}
                
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">Prénom</label>
              <input
                type="text"
                name="fname"
                className="w-full border rounded-xl p-2"
                value={form.fname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">Nom</label>
              <input
                type="text"
                name="lname"
                className="w-full border rounded-xl p-2"
                value={form.lname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Date de naissance
              </label>
              <input
                type="date"
                name="birth_date"
                className="w-full border rounded-xl p-2"
                value={form.birth_date}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Lieu de naissance
              </label>
              <input
                type="text"
                name="birth_place"
                className="w-full border rounded-xl p-2"
                value={form.birth_place}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <NationalitySelect
                form={form}
                setForm={setForm}
                handleChange={handleChange}
              />

              {/* <label className="block font-medium text-sm mb-1">
              Nationalité
            </label>
            <input
              type="text"
              name="nationality"
              className="w-full border rounded-xl p-2"
              value={form.nationality}
              onChange={handleChange}
              required
            /> */}
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">
                N° Permis de conduire
              </label>
              <input
                type="text"
                name="licence_id"
                className="w-full border rounded-xl p-2"
                value={form.licence_id}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Date de délivrance{" "}
              </label>
              <input
                type="date"
                name="licence_date"
                className="w-full border rounded-xl p-2"
                value={form.licence_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie du permis
                <div className="relative inline-block group ml-2">
                  <span className="text-blue-600 cursor-pointer">ℹ️</span>
                  <div className="absolute bottom-full mb-1 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    A = Moto <br />
                    B = Voiture <br />
                    C = Camion <br />
                    D = Bus <br />E = Remorque
                  </div>
                </div>
              </label>

              <select
                name="licence_category"
                className="w-full border rounded-xl p-2"
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
            </div>

            <div>
              <label className="block font-medium text-sm mb-1">
                Validité souhaitée Permis international (Année)
              </label>
              <input
                type="number"
                name="validity"
                className="w-full border rounded-xl p-2"
                value={form.validity}
                onChange={handleChange}
                max={3}
                min={1}
              />
            </div>

            {/* <div className="col-span-2">
            <label className="block font-medium text-sm mb-1">Documents</label>
            <input
              type="file"
              name="documents"
              multiple
              className="w-full border rounded-xl p-2"
              onChange={handleChangeFile}
            />
          </div>

          <div className="col-span-2">
            <label className="block font-medium text-sm mb-1">CIN</label>
            <input
              type="file"
              name="documents"
              multiple
              className="w-full border rounded-xl p-2"
              onChange={handleChangeFile}
            />
          </div> */}

            <div className="col-span-2">
              <label className="block font-medium text-sm mb-1">
                CIN recto
              </label>
              <input
                type="file"
                name="documents"
                className="w-full border rounded-xl p-2"
                onChange={handleChangeFile}
              />
            </div>

            <div className="col-span-2">
              <label className="block font-medium text-sm mb-1">CIN verso</label>
              <input
                type="file"
                name="cin"
                className="w-full border rounded-xl p-2"
                onChange={handleChangeFile}
              />
            </div>

          
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
          >
            Enregister
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              Vous avez deja un compte ?
              <Link
                to="/login"
                className="text-blue-600 font-semibold ml-1 hover:underline transition duration-200"
              >
                Connectez-vous
              </Link>
            </p>
          </div>
        </form>

        <br />
      </Layout>
    </>
  );
}
