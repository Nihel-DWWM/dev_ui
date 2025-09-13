export default function ContactSection() {

  
  return (
    <section className="flex flex-col md:flex-row bg-gray-200 min-h-screen">
      {/* Form Container */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <form className="w-full max-w-lg space-y-4 bg-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Envoyer un message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Prénom"
              className="border p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Nom"
              className="border p-3 rounded w-full"
            />
            <input
              type="email"
              placeholder="Adresse Email"
              className="border p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="N° de Téléphone"
              className="border p-3 rounded w-full"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Votre message"
            className="border p-3 rounded w-full"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-[#0E3A66] font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 h-[500px] md:h-auto">
        <img
          src="/ahb-1024x683.jpg"
          alt="Contact illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}