import backgroundImage3 from "../assets/barranquilla_3.jpg";

export const MainArticle = () => {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage3})`,
      }}
    >
      {/* Capa de superposición */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-800 opacity-90"></div>

      {/* Contenido */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 text-center text-white px-4">
        <h1 className="text-6xl font-bold tracking-wide drop-shadow-lg">
          Embárcate, Sumérgete y Comparte
        </h1>
        <p className="text-lg mt-4 drop-shadow-xl text-white opacity-100 bg-blue-700 bg-opacity-70 px-6 py-2 inline-block">
          ¡Ven y descubre la historia, el arte y la cultura de la cuna del Carnaval!
        </p>
      </div>
    </main>
  )
}