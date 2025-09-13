<section className="relative w-full h-[250px] md:h-[300px] lg:h-[500px] overflow-hidden pb-0" id="accueil">
  <img
    src="/Image 29 juil. 2025, 11_43_39.png"
    alt="Home Page"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
    <h2 className="text-wrap text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md leading-tight">
      Besoin de conduire votre véhicule à l'étranger ?
    </h2>
    <p className="mt-3 text-base sm:text-lg md:text-xl font-light drop-shadow-sm max-w-2xl">
      Votre permis international en toute simplicité
    </p>
    <Link to="/permis">
      <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-[#0E3A66] font-bold px-6 py-3 rounded-full transition duration-300">
        Commencer
      </button>
    </Link>
  </div>

  {/* Courbe décorative */}
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
