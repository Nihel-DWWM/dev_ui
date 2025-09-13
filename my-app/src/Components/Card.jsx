export default function Card(){


    return(
       <section className="py-12 bg-white text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Conduisez partout avec votre permis de conduire international
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Carte 1 */}
            <Card>
              <CardContent className="p-6">
                <img
                  src="/david-becker-V862kywlKkw-unsplash.jpg" // remplace par ton chemin
                  alt="Mobilité"
                  className="h-32 w-full object-cover rounded mb-4"
                />
                <h4 className="font-semibold">
                  Profitez de la liberté de mobilité
                </h4>
                <p className="text-sm mt-2">
                  Utilisez votre permis de conduire partout dans le monde.
                </p>
              </CardContent>
            </Card>

            {/* Carte 2 */}
            <Card>
              <CardContent className="p-6">
                <img
                  src="/images/exploration.jpg" // remplace par ton chemin
                  alt="Exploration"
                  className="h-32 w-full object-cover rounded mb-4"
                />
                <h4 className="font-semibold">Explorez de nouveaux horizons</h4>
                <p className="text-sm mt-2">
                  Louez une voiture à l'étranger sans tracas administratifs.
                </p>
              </CardContent>
            </Card>

            {/* Carte 3 */}
            <Card>
              <CardContent className="p-6">
                <img
                  src="/images/formalites.jpg" // remplace par ton chemin
                  alt="Formalités"
                  className="h-32 w-full object-cover rounded mb-4"
                />
                <h4 className="font-semibold">Simplifiez vos formalités</h4>
                <p className="text-sm mt-2">
                  Demandez votre permis de conduire international en ligne.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>




    )
}