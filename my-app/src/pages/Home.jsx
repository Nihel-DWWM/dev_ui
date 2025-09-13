import ContactSection from "@/Components/Contactsection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importez le composant FontAwesomeIcon
import "@fortawesome/fontawesome-free/css/all.min.css";
import PartenairesCarousel from "@/Components/PartenairesCarousel";
import Hotels from "@/Components/Hotels";
import Events from "@/Components/Events";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <div className="font-sans text-gray-800">
        {/* Section Héro */}
        <section
          className="relative w-full h-[250px] md:h-[300px] lg:h-[500px] overflow-hidden pb-0"
          id="accueil"
        >
          <img
            src="/Image 29 juil. 2025, 11_43_39.png"
            alt="Home Page"
            className="w-full h-full object-cover"
          />

          {/* Overlay avec animation */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-wrap text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md leading-tight"
            >
              Besoin de conduire votre véhicule à l'étranger ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 text-base sm:text-lg md:text-xl font-light drop-shadow-sm max-w-2xl"
            >
              Votre permis international en toute simplicité
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/permis">
                <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-[#0E3A66] font-bold px-6 py-3 rounded-full transition duration-300">
                  Commencer
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Courbes décoratives */}
          <svg
            className="absolute bottom-0 w-full -mb-1"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,0 C480,100 960,20 1440,100 L1440,120 L0,120 Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 w-full pointer-events-none"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C480,100 960,20 1440,100"
              fill="none"
              stroke="#004B91"
              strokeWidth="20"
            />
          </svg>
          
        </section>

        {/* Section suivante – Réduite visuellement */}
        <section className="bg-white px-6 pt-12 md:pt-14 pb-16">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#004B91] mb-5">
              Pourquoi choisir le Touring Club de Tunisie ?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Reconnus à l’international, nous mettons à votre service notre
              expertise dans les documents de circulation, l’assistance routière
              et l’accompagnement à l’étranger. Faites confiance à un partenaire
              fiable et expérimenté.
            </p>
          </div>
        </section>

        {/* <section className="relative w-full h-[500px] overflow-hidden"> */}
        {/* Image de fond */}
        {/* <img
            src="/Image 29 juil. 2025, 11_43_39.png"
            alt="Home Page"
            className="w-full h-full object-cover "
          /> */}

        {/* Overlay avec texte */}
        {/* <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Besoin de conduire votre véhicule à l'étranger ?
            </h2>
            <p className="mt-4 text-lg md:text-xl font-light drop-shadow-sm">
              Votre permis international en toute simplicité
            </p>
            <Link to="/permis">
              <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
                Commencer
              </button>
            </Link>
          </div> */}

        {/* Courbe blanche de fond */}
        {/* <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,0 C480,100 960,20 1440,100 L1440,120 L0,120 Z"
            />
          </svg> */}

        {/* Courbe fine (bordure) jaune ou bleue */}
        {/* <svg
            className="absolute bottom-[0px] w-full pointer-events-none"
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
          > */}
        {/* Jaune Touring Club. Change en #004B91 pour bleu */}
        {/* <path
              d="M0,0 C480,100 960,20 1440,100"
              fill="none"
              stroke="#FACC15"
              strokeWidth="10"
            />
          </svg>
        </section> */}

        {/* Section suivante */}

        {/* <section className="bg-white px-6 py-10 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pourquoi choisir le Touring Club de Tunisie ?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Reconnus à l’international, nous mettons à votre service notre
              expertise dans les documents de circulation, l’assistance routière
              et l’accompagnement à l’étranger. Faites confiance à un partenaire
              fiable et expérimenté.
            </p>
          </div>
        </section> */}
        {/* <section className="bg-white px-6 py-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pourquoi choisir le Touring Club de Tunisie ?
          </h3>
          <p className="text-gray-600 max-w-2xl">
            Nos services sont reconnus à l'international, avec une expertise
            dans les documents de circulation, l’assistance routière et
            l’accompagnement à l’étranger.
          </p>
        </section> */}

        {/* Nouvelle section : Nos Services */}

        <section className="py-20 bg-[#F8F9FA]" id="services">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-[#0E3A66] mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nos Services
            </motion.h2>
            {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0E3A66] mb-16">
              Nos Services
            </h2> */}

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {/* Service 1 */}

              <div className="flex-1 bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02] border border-blue-100">
                <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#E6F0FA] text-[#0E3A66] text-2xl">
                  <i className="fas fa-id-card"></i>
                </div>

                <Link
                  to="/permis/#permis_international"
                  className="block text-center group"
                >
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4 relative inline-block transition duration-300 group-hover:text-[#0E3A66]">
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 absolute left-0 bottom-0 w-0 h-2 z-[-1] transition-all duration-300 group-hover:w-full rounded"></span>
                    Permis de Conduire International
                  </h3>
                </Link>
                {/* <Link to="/permis" className="block text-center ">
                      <h3 className="text-xl font-semibold text-[#1F2937] mb-4 hover:text-[#0E3A66] transition">
                        Permis de Conduire International
                      </h3>
                      </Link> */}

                <p className="text-gray-600 text-sm leading-relaxed">
                  Obtenez votre permis de conduire international pour circuler
                  librement dans de nombreux pays.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex-1 bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02] border border-green-100">
                <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#EBF9F0] text-green-700 text-2xl">
                  <i className="fas fa-file-alt"></i>
                </div>

                <Link to="/service-b" className="block text-center group">
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4 relative inline-block transition duration-300 group-hover:text-green-700">
                    <span className="bg-green-200 absolute left-0 bottom-0 w-0 h-2 z-[-1] transition-all duration-300 group-hover:w-full rounded"></span>
                    Carnet de Passage en Douane
                  </h3>
                </Link>
                {/* <Link to="/service-b" className="block text-center">
                
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4 hover:text-green-700 transition">
                    Carnet de Passage en Douane
                  </h3>
                </Link> */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  Facilitez vos voyages internationaux avec votre véhicule grâce
                  au carnet de passage en douane.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex-1 bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02] border border-yellow-100">
                <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFF9E6] text-yellow-600 text-2xl">
                  <i className="fas fa-address-card"></i>
                </div>

                <Link to="/service-b" className="block text-center group">
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4 relative inline-block transition duration-300 group-hover:text-yellow-600">
                    <span className="bg-yellow-200 absolute left-0 bottom-0 w-0 h-2 z-[-1] transition-all duration-300 group-hover:w-full rounded"></span>
                    Carte Grise Internationale
                  </h3>
                </Link>
                {/* <Link to="/service-b" className="block text-center">
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-4 hover:text-yellow-600 transition">
                    Carte Grise Internationale
                  </h3>
                </Link> */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  Assurez la conformité de votre véhicule à l'étranger avec la
                  carte grise internationale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Hotels />

        <PartenairesCarousel />
        <Events />

        {/* <section className="py-12 bg-gray-100 text-center">
          <h4 className="text-xl font-semibold mb-6">Galerie d'Images</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="h-32 bg-gray-300"></div>
            <div className="h-32 bg-gray-300"></div>
            <div className="h-32 bg-gray-300"></div>
            <div className="h-32 bg-gray-300"></div>
          </div>
        </section> */}

        <section className="py-12 text-center">
          <h4 className="text-2xl font-semibold mb-4">
            Contactez-nous pour en savoir plus
          </h4>
          <p className="mb-4 text-gray-600">
            Nous sommes disponibles pour répondre à toutes vos questions
            concernant nos services.
          </p>
          {/* <Button className="bg-[#004B91] text-white hover:bg-blue-700">
            <Mail className="mr-2 h-4 w-4" /> Envoyer un message
          </Button> */}
        </section>

        <ContactSection />
      </div>
    </Layout>
  );
}
