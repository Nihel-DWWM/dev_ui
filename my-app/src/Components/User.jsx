
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function User() {

  const { user, token, logout, loading } = useContext(AuthContext);
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      fetchDocuments();
    }
  }, [token, user]);

  const fetchDocuments = async () => {
    console.log(token)
    if (!token) return;
    try {
      const response = await fetch("http://localhost:3000/users/documents", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data)
      setDocuments(data);
    } catch (error) {
      console.error("Erreur récupération des demandes:", error);
    }
  };

  const fetchDocument = async (formType) => {
    try {
       const response= await fetch("http://localhost:3000/users/document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          type: formType,
          userId: user?._id,
        }),
      });

      const data= await response.json()
      console.log("Réponse du backend :",data)
       
      fetchDocuments();
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande :", error);
    }
  };

  if (loading) {
    return <p className="text-center py-8">Chargement en cours...</p>;
  }

  if (!user) {
    return <p className="text-center py-8">Vous n'êtes pas connecté.</p>;
  }

  return (

    <div className="max-w-5xl mx-auto p-8 space-y-8">
      <Card className="flex items-center space-x-6 p-6">
        <img
          src={`https://ui-avatars.com/api/?name=${user.lname}`}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Bienvenue, {user.lname} !</h2>
          <p className="text-gray-700">Email : {user.email}</p>
          <p className="text-gray-700">Permis n° : {user.licence_id}</p>
          <Button onClick={()=>{logout;navigate('/user');}} variant="outline">Se déconnecter</Button>
        </div>
      </Card>

      <div className="flex space-x-4 justify-center">
        <Button onClick={() => fetchDocument("demande permis")}>
          Demande Permis International
        </Button>
        <Button onClick={() => fetchDocument("demande carte grise")}>
          Demande Carte Grise Internationale
        </Button>
        <Button onClick={() => fetchDocument("demande carnet douane")}>
          Demande Carnet de Passage en Douane
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Vos demandes</h3>
          <table className="w-full table-auto border border-gray-200 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Statut</th>
                <th className="border p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {documents.length > 0 ? (
                documents.map((doc) => (
                  <tr key={doc._id}>
                    <td className="border p-2">{doc.type}</td>
                    <td className="border p-2 capitalize">{doc.status || "en attente"}</td>
                    <td className="border p-2">
                      {new Date(doc.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4">
                    Aucune demande pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

//////deuxième solution///////////
//     const { user, token } = useContext(AuthContext);
    

//     const fetchDocument = (form) => {
//         fetch('http://localhost:3000/users/document', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//                 type: form.type,
//                 userId: form.userId,
//             })
//         })
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error('Erreur lors de la connexion :', error));
//     };

//     if (!user) {
//         return <p>Chargement utilisateur...</p>;
//     }

//     return (
//         <>
//             <div className="p-4">
//                 <h1 className="text-2xl font-bold mb-4">Bienvenue, {user.lname} !</h1>
//                 <p>Email : {user.email}</p>
//                 <p>PERMIS n° : {user.licence_id}</p>
//             </div>

//             <div className="flex flex-col items-center space-y-4 mt-8">
//                 <button
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
//                     onClick={() => fetchDocument({ userId: user._id, type: "demande permis" })}
//                 >
//                     Demande permis International
//                 </button>
//                 <button
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
//                     onClick={() => fetchDocument({ userId: user._id, type: "demande carte grise" })}
//                 >
//                     Demande carte grise Internationale
//                 </button>
//                 <button
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
//                     onClick={() => fetchDocument({ userId: user._id, type: "demande carnet de passage" })}
//                 >
//                    Demande carnet de passage en douane
//                 </button>



//             </div>
//         </>
//     );
// }

/////////////////Deuxième solution//////////////////////////

    /////1ere solution//////

//     // Récupération des données de l'utilisateur depuis le localStorage
//   const [user, setUser] = useState();
//   const[form,setForm]=useState()

//  const fetchUser = async () => {

//         const token = localStorage.getItem('token'); 
//         console.log(token)
//     try {
//         const response = await fetch('http://localhost:3000/users/me', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Erreur lors de la récupération de l’utilisateur');
//         }

//         const data = await response.json();
//         console.log('Utilisateur récupéré :', data);
//         setUser(data)
//         //return data;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

// useEffect(() => {

//     fetchUser()
    
    
// }, []);

// const fetchDocument= (form)=>{

//     fetch('http://localhost:3000/users/document', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         type: form.type,
//         userId: form.userId
//       })
//     })
//     .then(response=>response.json())
//     .then(data=> console.log(data))
//     .catch(error=> console.error('Erreur lors de la connexion :', error))
// }

// //  const handleSubmit=(e)=>{

// //     fetchDocument(form)
// //  }

 

//   if (!user) {
//     return <p>Chargement...</p>;
//   }

/////////////////////////

//   return (

//     <>
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Bienvenue, {user.lname} !</h1>
//       <p>Email : {user.email}</p>
//       <p>PERMIS n° : {user.licence_id}</p>

    
//      </div>
//      <div className="flex flex-col items-center space-y-4 mt-8">
//     <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md" onClick={() =>
//         fetchDocument({ userId: user._id, type: "demande permis" })}>
//        Demande permis International
//     </button>
     
//     <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md" onClick={() =>
//         fetchDocument({ userId: user._id, type: "demande carte grise" })} >
//        Demande Carte grise Internationeale
//     </button>

//     <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md" onClick={() =>
//         fetchDocument({ userId: user._id, type: "demande carnet de passage" })}>
//        Demande carnet de passage en douane
//     </button>

//  </div>
    
    
//     </>
//   )
// }


