import Layout from "@/Components/Layout";
import React from "react";

export default function Apropos() {
  return (
    <Layout>
      <section className="bg-white text-gray-800 px-6 py-12 md:py-20" id="apropos">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Titre principal */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">
              À propos du Touring Club de Tunisie
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Le Touring Club de Tunisie est une association à but non lucratif qui œuvre à faciliter la mobilité des automobilistes et à promouvoir le tourisme, en Tunisie comme à l’international..
            </p>
          </div>

          {/* Bloc image + mission */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img
              src="/logo_tct.jpg"
              alt="Logo du Touring Club de Tunisie"
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="text-gray-700 space-y-4 text-justify">
              <h2 className="text-2xl font-semibold text-blue-800">
                Notre mission
              </h2>
              <p>
                Depuis sa création, le Touring Club de Tunisie œuvre pour
                faciliter la vie des automobilistes tunisiens en leur offrant
                des services fiables, reconnus par les instances
                internationales.
              </p>
              <p>
                Nous sommes également un relais officiel pour plusieurs
                documents internationaux tels que les permis de conduire
                internationaux et les carnets de passage en douane.
              </p>
            </div>
          </div>

          {/* Engagements */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-10 shadow-inner">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
              Nos engagements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg max-w-4xl mx-auto">
              <li>Assistance rapide et fiable pour les voyageurs</li>
              <li>Service clientèle à l’écoute et professionnel</li>
              <li>Partenariat avec les clubs automobiles à l’étranger</li>
              <li>Conformité avec les standards internationaux</li>
            </ul>
          </div>

          {/* Organisation */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-800 text-center">
              Organisation & Dirigeants
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-gray-700 text-base">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">Président</h3>
                <p>Mr. Mohamed Ali Ben Salem</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">Vice-Président</h3>
                <p>Mme. Leïla Mansour</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Secrétaire Général
                </h3>
                <p>Mr. Karim Trabelsi</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">Trésorier</h3>
                <p>Mr. Nabil Gharbi</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Responsable des Relations Internationales
                </h3>
                <p>Mme. Amira Kacem</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-blue-900">
                  Responsable des Services aux Membres
                </h3>
                <p>Mr. Youssef Dhouib</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devenir membre */}
      <div className="bg-blue-900 text-white rounded-xl px-6 py-12 md:py-16 shadow-lg">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Rejoignez le Touring Club de Tunisie
          </h2>
          <p className="text-lg text-blue-100">
            
            Rejoignez une communauté de passionnés de mobilité. Devenir membre,
            c’est faire partie d’un réseau reconnu à l’échelle internationale.
          </p>
          <a
            href="/devenir-membre"
            className="inline-block bg-yellow-400 text-[#0E3A66] hover:bg-yellow-500 font-semibold px-6 py-3 rounded-full shadow  transition duration-300"
          >
            Devenir membre
          </a>
        </div>
      </div>
    </Layout>
  );
}
