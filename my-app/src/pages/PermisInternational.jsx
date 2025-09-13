import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function PermisInternational() {
  return (
    <>
      <Layout>
        <div className="container mx-auto py-16 px-4" id="permis_international">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-[#0E3A66] mb-8 text-center">
            Permis de Conduire International
          </h1>

          {/* Main content container with image and text */}
          {/* Using Flexbox instead of Grid for responsive layout */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-12 bg-[#E6F0FA]">
            {/* Image section */}
            <div className="flex justify-center  md:w-1/2">
              {" "}
              {/* Center on mobile, align right on desktop, half width on desktop */}
              <img
                src={"/PCI.jpg"}
                alt="Permis de Conduire International"
                className="rounded-lg shadow-lg max-w-full h-auto md:max-w-md" // Responsive image styling
              />
            </div>

            {/* Text and button section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
              {" "}
              {/* Center content on mobile, align left on desktop, half width on desktop */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le Permis de Conduire International (PCI) est une traduction
                officielle de votre permis de conduire national, indispensable
                pour pouvoir conduire légalement un véhicule dans de nombreux
                pays étrangers. Il est généralement requis en complément de
                votre permis national et facilite les démarches avec les
                autorités locales, en évitant les barrières linguistiques.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Valide pour une durée limitée, le PCI doit toujours être utilisé
                conjointement avec votre permis de conduire national en cours de
                validité. C'est votre passeport routier pour explorer le monde
                en toute sérénité.
              </p>
              
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-8 px-4 py-8">
  {/* Section "Apply Online Now" */}
  {/* Suppression de md:w-1/2 et lg:w-2/5 pour laisser max-w-lg et l'alignement flex faire le travail */}
  <section className="bg-yellow-600 py-10 px-6 text-white text-center rounded-lg shadow-xl max-w-md md:max-w-lg mx-auto md:mx-0">
    <div className="container mx-auto"> {/* mx-auto est redondant ici si le parent est flex et qu'il y a un max-width */}
      {/* Titre principal */}
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        Faire une demande en ligne
      </h2>

      {/* Sous-titre / Description */}
      <p className="text-base md:text-lg mb-8">
        Demander en ligne dès maintenant
      </p>

      {/* Bouton d'action */}
      <Link
        to="/login"
        className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Demander
      </Link>
    </div>
  </section>

  {/* Section "Documents Demandés" */}
  {/* mx-auto est pour centrer le bloc lui-même si le parent n'est pas flex ou si flex ne le remplit pas */}
  <div className="bg-[#004B91] rounded-lg shadow-xl p-6 md:p-8 max-w-sm mx-auto md:mx-0 text-white md:max-w-lg">
    <h3 className="text-2xl font-bold mb-4 text-center">
      Documents Demandés
    </h3>
    <ul className="space-y-3">
      <li className="flex items-start">
        <svg
          className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Formulaire de demande de permis signé</span>
      </li>
      <li className="flex items-start">
        <svg
          className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Copie Carte d'identité ou passeport</span>
      </li>
      <li className="flex items-start">
        <svg
          className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Copie permis de conduire</span>
      </li>
      <li className="flex items-start">
        <svg
          className="h-6 w-6 text-yellow-300 mr-3 flex-shrink-0 mt-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>2 photos d'identité</span>
      </li>
    </ul>
  </div>
</div>

        

        <br />
      </Layout>
    </>
  );
}
