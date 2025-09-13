export default function Events() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Section Événements */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#004B91]">
              Événements
            </h2>
            <a
              href="/evenements"
              className="text-sm text-[#004B91] hover:underline"
            >
              Voir tout →
            </a>
          </div>
          <ul className="space-y-6">
            {[
              {
                date: "25.07.25",
                title: "Journée Sécurité Routière à Sfax",
                image: "/event1.jpg",
                link: "#",
              },
              {
                date: "20.07.25",
                title: "Distribution de Permis Internationaux à Tunis",
                image: "/event2.jpg",
                link: "#",
              },
              {
                date: "15.07.25",
                title: "Séminaire Touring Club à Djerba",
                image: "/event3.jpg",
                link: "#",
              },
            ].map((event, index) => (
              <li key={index} className="flex items-start gap-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <a
                    href={event.link}
                    className="text-lg text-[#004B91] font-semibold hover:underline flex items-center gap-1"
                  >
                    {event.title}
                    <span>→</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Section Galerie ou Médias */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#004B91]">
              Galerie Média
            </h2>
            <a
              href="/galerie"
              className="text-sm text-[#004B91] hover:underline"
            >
              Voir tout →
            </a>
          </div>
          <div className="space-y-4">
            <div className="relative rounded overflow-hidden shadow-lg">
              <img
                src="/media1.jpg"
                alt="Vidéo Djerba"
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
                Djerba en images
              </div>
            </div>
            <div className="bg-[#004B91] text-white p-5 rounded shadow-md">
              <h4 className="text-lg font-semibold mb-1">
                Carnet de Bord Touring
              </h4>
              <a href="/article" className="text-sm hover:underline">
                Lire plus →
              </a>
            </div>
            <div className="bg-[#0E3A66] text-white p-5 rounded shadow-md">
              <h4 className="text-lg font-semibold mb-1">
                Documentaire : Route du Sud
              </h4>
              <a href="/doc" className="text-sm hover:underline">
                Regarder →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
