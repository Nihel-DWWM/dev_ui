import ContactSection from "@/Components/Contactsection";
import Layout from "@/Components/Layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <div id="contact">
        {/* En-tête avec image de fond */}
        <div
          className="relative lg:h-80 h-40  bg-cover bg-center "
          style={{
            backgroundImage: `url('https://mediaim.expedia.com/destination/1/a9bda1fa50949556185721e94b0e2106.jpg')`,
            backgroundSize: "100%", // Zoom arrière
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Film transparent (overlay) */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="container mx-auto px-6">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-white text-3xl font-bold"
              >
                Contactez-nous
              </motion.h1>
              
            </div>
          </div>
        </div>

        {/* Infos des agences */}

        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
          {/* Bloc Adresse Tunis */}
          <div className="border border-yellow-500 p-6 rounded-2xl shadow-lg bg-white">
            <h2 className="text-xl font-bold text-[#004B91] border-b border-yellow-500 pb-3 mb-4">
              Tunis
            </h2>
            <p className="text-gray-700">
              15 rue d'Allemagne, 1000 Tunis – Tunisie
            </p>
            <p className="mt-2 text-sm text-gray-600">Tél : +216 71 323 114</p>
            <a
              href="https://www.google.com/maps/place/Association+touring+club+Tunisie+-+permis+international+de+conduire/@36.7979984,10.1748261,17z/data=!4m6!3m5!1s0x12fd34731b23d763:0xff0091715560bffd!8m2!3d36.7979984!4d10.177401!16s%2Fg%2F11g72fmy0z?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-full font-medium transition duration-300">
                Voir l'emplacement
              </button>
            </a>
          </div>

          {/* Bloc Horaires */}
          <div className="bg-[#004B91] text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold border-b border-yellow-400 pb-3 mb-4">
              Horaires d'ouverture
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Lundi – Vendredi</span>
                <span>09h – 15h30</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Samedi</span>
                <span>Fermé</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section plaintes */}

        {/* <div className="bg-[#2564a8] text-white px-6 py-8">
        <div className="container mx-auto">
          <h3 className="text-lg font-semibold mb-2 border-b border-yellow-500 inline-block pb-1">
            Pour toute réclamation, veuillez nous contacter :
          </h3>
          <p className="mt-2">Email : contact@touringclub.tn</p>
         
        </div>
      </div> */}

        <section className="bg-[#004B91] text-white py-10 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#0E3A66] p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <i className="fas fa-comment-dots text-yellow-400 text-xl"></i>
                Réclamations & Contact
              </h3>
              <p className="text-lg leading-relaxed">
                Pour toute réclamation ou suggestion, n'hésitez pas à nous
                écrire :
              </p>

              <div className="mt-4 flex items-center gap-3">
                <i className="fas fa-envelope text-yellow-300 text-lg"></i>
                <a
                  href="mailto:contact@touringclub.tn"
                  className="underline hover:text-yellow-300 transition"
                >
                  contact@touringclub.tn
                </a>
              </div>

              {/* WhatsApp ou téléphone à ajouter si souhaité */}
              {/* 
      <div className="mt-3 flex items-center gap-3">
        <i className="fab fa-whatsapp text-green-400 text-lg"></i>
        <span>+216 50 123 456</span>
      </div> 
      */}
            </div>
          </div>
        </section>
      </div>

      <ContactSection />
    </Layout>
  );
}
