import React from "react";
import { Download } from "lucide-react"; // Icône (nécessite lucide-react ou peut être remplacée)
import Layout from "@/Components/Layout";

const documents = [
  {
    title: "Formulaire d'adhésion",
    description: "Téléchargez et remplissez ce formulaire pour devenir membre.",
    url: "/documents/formulaire-adhesion.pdf",
  },
  {
    title: "Brochure des services",
    description: "Découvrez tous les services proposés par notre club.",
    url: "/documents/brochure-services.pdf",
  },
  {
    title: "Conditions Générales",
    description: "Lisez attentivement nos conditions d'utilisation.",
    url: "/documents/conditions-generales.pdf",
  },
];

const Documents = () => {
  return (
   <Layout>

    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="documents" >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0E3A66] mb-10">
          Documents à Télécharger
        </h1>

        <div className="grid gap-6 sm:grid-cols-2">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between transition hover:shadow-lg"
            >
              <div>
                <h2 className="text-xl font-semibold text-[#2564a8]">
                  {doc.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{doc.description}</p>
              </div>
              <a
                href={doc.url}
                download
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-[#0E3A66] font-semibold rounded-full transition"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    </Layout>
  );
};

export default Documents;