import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Connexion() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchClient = () => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Connexion réussie" && data.token) {
          console.log(data.token);
          localStorage.setItem("token", data.token);
          setToken(data.token); // ⬅️ AJOUT OBLIGATOIRE
          navigate("/user/connect");
        } else {
          alert("Identifiants incorrects");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion :", error);
        alert("Erreur lors de la connexion");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchClient();
  };

  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow space-y-6 mt-8"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Connexion
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
          >
            Se connecter
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              Besoin d’un compte ?
              <Link
                to="/inscription"
                className="text-blue-600 font-semibold ml-1 hover:underline transition duration-200"
              >
                S’inscrire
              </Link>
            </p>
          </div>
        </form>
      </Layout>
    </>
  );
}
