import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { motion } from "framer-motion";

export default function PartenairesCarousel() {
  const partenaires = [
    {
      name: 'FIA',
      desc: 'Fédération Internationale de l’Automobile.',
      img: '/FIA_logotype.svg',
      link: 'https://www.fia.com/',
    },
    {
      name: 'AIT',
      desc: 'Alliance Internationale de Tourisme.',
      img: '/logo-AIT.png',
      link: 'https://www.ait-touringalliance.com/',
    },
    // Ajoute d'autres partenaires si besoin
  ]

  return (
    <section className="py-12 bg-gray-50 text-center">

        {/* <h3 className="text-4xl md:text-5xl font-bold text-center text-[#0E3A66] mb-16">
           Nos Partenaires
        </h3> */}

        <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-[#0E3A66] mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nos Partenaires
            </motion.h2>
      {/* <h3 className="text-2xl font-semibold mb-6">Nos Partenaires</h3> */}

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-xl mx-auto"
      >
        {partenaires.map((partenaire, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={partenaire.img}
                alt={partenaire.name}
                className="h-32 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold">{partenaire.name}</h4>
              <p className="text-sm text-gray-600">{partenaire.desc}</p>

              <a
                href={partenaire.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block"
                >
                <button className="px-6 py-3 bg-yellow-400 text-[#0E3A66] font-semibold rounded-full shadow-md hover:bg-yellow-500 hover:scale-105 transition duration-300 ease-in-out">
                  Visiter Site Web
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
// export default function PartenairesCarousel() {
//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     slides: {
//       perView: 1,
//       spacing: 15,
//     },
//     autoplay: {
//       delay: 3000,
//       pauseOnMouseEnter: true,
//     },
//   });

//   return (
//     <section className="py-8 bg-gray-50 text-center">
//       <h3 className="text-xl font-semibold mb-6">Nos Partenaires</h3>
//       <div ref={sliderRef} className="keen-slider max-w-xl mx-auto">
{
  /* Slide 1 */
}
// <div className="keen-slider__slide">
//   <Card>
//     <CardContent className="p-6 h-full w-full flex flex-col items-center text-center">
//       <div className="h-32 w-full flex justify-center items-center mb-4">
//         <img
//           src="/FIA_logotype.svg"
//           alt="FIA"
//           className="max-h-full max-w-full object-contain"
//         />
//       </div>
//       <h4 className="font-semibold">FIA</h4>
//       <p className="text-sm mt-2">
//         Fédération Internationale de l’Automobile.
//       </p>
//     </CardContent>
//   </Card>
// </div>

{
  /* Slide 2 */
}
// <div className="keen-slider__slide">
//   <Card>
//     <CardContent className="p-6">
//       <img
//         src="/david-becker-V862kywlKkw-unsplash.jpg"
//         alt="Partner"
//         className="h-32 w-full object-cover rounded mb-4"
//       />
//       <h4 className="font-semibold">Partenaire Auto</h4>
//       <p className="text-sm mt-2">
//         Collaboration technique avec le secteur automobile.
//       </p>
//     </CardContent>
//   </Card>
// </div>

{
  /* Ajoute d'autres slides ici si nécessaire */
}
//       </div>
//     </section>
//   );
// }
