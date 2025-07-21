import { useState } from "react";


export default function Formulaire() {
  
 const [submitted, setSubmitted] = useState(false)

 
  //const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''

  })
  

  const [files, setFiles] = useState([])

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
       formData.append('documents', files[i]);
      }
      }

      // if (file) {
      //   formData.append('documents', file);
      // }
      const response = await fetch('http://localhost:3000/users/add', {
        method: "POST",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: formData
      });
      if (response.ok) {
        console.log(response)
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }
 

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleChangeFile= (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(selectedFiles) // Utilisation de e.target.files pour obtenir le fichier sélectionné
    console.log(selectedFiles) // Affiche les fichiers sélectionnés dans la console
  }


    const handleSubmit = (e) => {
    e.preventDefault()
    console.log(files)
    setSubmitted(true)
    console.log(form)
    fetchData(form) // Appel de la fonction fetchData avec les données du formulaire
    
  }
    
    // Réinitialiser le statut de soumission à chaque changement
    return(

       <>

    <h1 className="text-3xl font-bold text-center mt-8">Formulaire d'inscription</h1>   
    
       <br />

    <form className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className="text-2xl font-semibold text-gray-700">Créer un utilisateur</h2>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block font-medium text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-xl p-2"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded-xl p-2"
            value={form.password}
            onChange={handleChange}
            required
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
          <label className="block font-medium text-sm mb-1">Date de naissance</label>
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
          <label className="block font-medium text-sm mb-1">Lieu de naissance</label>
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
          <label className="block font-medium text-sm mb-1">Nationalité</label>
          <input
            type="text"
            name="nationality"
            className="w-full border rounded-xl p-2"
            value={form.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-medium text-sm mb-1">N° Permis de conduire</label>
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
          <label className="block font-medium text-sm mb-1">Date de délivrance </label>
          <input
            type="date"
            name="licence_date"
            className="w-full border rounded-xl p-2"
            value={form.licence_date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Catégorie </label>
          <input
            type="text"
            name="licence_category"
            className="w-full border rounded-xl p-2"
            value={form.licence_category}
            onChange={handleChange}
            required
          />

        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Validité souhaitée Permis international (Année)</label>
          <input
            type="number"
            name="validity"
            className="w-full border rounded-xl p-2"
            value={form.validity}
            onChange={handleChange}
            max={3}
          />
        </div>

        <div className="col-span-2">
          <label className="block font-medium text-sm mb-1">Documents</label>
          <input
          
            type="file"
            name="documents"
            multiple
            className="w-full border rounded-xl p-2"
            onChange={handleChangeFile}
    
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition">
        Enregistrer
      </button>


    </form>
  
       
       {/* <hr />
    <h2>Créer un compte utilisateur</h2>
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mot de passe :</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Créer le compte</button>
    </form>
    {submitted && (
      <div style={{ marginTop: 16 }}>
        <h4>Compte créé !</h4>
        <p>Nom : {form.name}</p>
        <p>Email : {form.email}</p>
    
      </div>
    )} */}
       </>
      
)




}