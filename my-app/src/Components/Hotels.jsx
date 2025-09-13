export default function Hotels() {

  return (
    
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0E3A66] mb-16">
              Nos Hôtels
            </h2> */}

        {/* Hôtel 1 – Touring Djerba */}
        <div className="flex flex-col-reverse md:flex-row items-center bg-[#0E3A66] text-white rounded-3xl overflow-hidden shadow-xl mb-12">
          {/* Texte à gauche */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <span className="text-yellow-400 uppercase tracking-wider text-sm mb-3 block">
              Touring Club Marhala Djerba
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Hôtel de charme à Houmt Souk
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Un hôtel de charme au cœur de Houmt Souk à Djerba, récemment
              rénové.
            </p>
            <button className="bg-yellow-400 text-[#0E3A66] font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
              En savoir plus
            </button>
          </div>

          {/* Image à droite */}
          <div className="w-full md:w-1/2 h-64 md:h-[400px]">
            <img
              src="/Marhala_djerba.jpg"
              alt="Touring Club Marhala Djerba"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hôtel 2 – Touring Matmata */}
        <div className="flex flex-col md:flex-row items-center bg-[#0E3A66] text-white rounded-3xl overflow-hidden shadow-xl">
          {/* Texte */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <span className="text-yellow-400 uppercase tracking-wider text-sm mb-3 block">
              Touring Club Marhala Matmata
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Immersion dans les habitations troglodytes
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Séjournez dans un hôtel troglodyte authentique, au cœur du désert.
            </p>
            <button className="bg-yellow-400 text-[#0E3A66] font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
              En savoir plus
            </button>
          </div>

          {/* Image à gauche */}
          <div className="w-full md:w-1/2 h-64 md:h-[400px]">
            <img
              src="/Marhala_matmata.jpg"
              alt="Touring Club Marhala Matmata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
