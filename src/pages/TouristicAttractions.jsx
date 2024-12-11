import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTouristicAttractions } from "../services/colombia_api_service";
import SearchBar from "../components/SearchBar";
import { BiArrowBack } from "react-icons/bi";
import imagenotfound from "../assets/images/not_found.jpg";

export default function TouristicAttractions() {
  const navigate = useNavigate();
  const [touristicAttractions, setTouristicAttractions] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredAttractions, setFilteredAttractions] = useState([]);
  
  // Imagen de reemplazo
  const fallbackImage = imagenotfound; // Imagen que se usará si no se carga la original

  useEffect(() => {
    const showTouristicAttractions = async () => {
      const data = await getTouristicAttractions();
      console.log("Touristic attractions data:", data); // Depuración
      setTouristicAttractions(data);
      setFilteredAttractions(data);
    };
    showTouristicAttractions();
  }, []);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    setFilteredAttractions(
      touristicAttractions.filter((attraction) =>
        attraction.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem, touristicAttractions]);

  // Función para manejar el error de carga de imagen
  const handleImageError = (e) => {
    e.target.src = fallbackImage; // Cambia la fuente de la imagen a la imagen de reemplazo
  };

  return (
    <section className="text-blueGray-700 body-font mb-8 bg-gray-50">
      <div className="container flex flex-col items-center px-5 py-12 mx-auto lg:px-16">
        {/* Barra superior */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:w-full">
          {/* Botón Volver */}
          <div className="flex items-center mb-4 md:mb-0">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <BiArrowBack className="mr-2 text-xl" />
              Volver
            </button>
          </div>
          {/* Barra de búsqueda */}
          <div className="w-full md:w-auto">
            <SearchBar
              searchItem={searchItem}
              handleInputChange={handleInputChange}
              className="w-full md:w-80 leading-relaxed text-base border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>

        {/* Grid de lugares turísticos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAttractions.length === 0 ? (
            <p>No attractions found</p>
          ) : (
            filteredAttractions.map((attraction) => (
              <div key={attraction.id} className="relative shadow-md rounded-lg">
                {/* Imagen o ícono */}
                {attraction.images && Array.isArray(attraction.images) && attraction.images.length > 0 ? (
                  <img
                    src={attraction.images[0]}
                    alt={attraction.name}
                    className="h-64 md:h-72 w-full rounded-t-lg object-cover"
                    onError={handleImageError} // Maneja el error de la imagen
                  />
                ) : (
                  <div className="h-64 md:h-72 w-full bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded">
                      <img
                        src={fallbackImage}  // Usar imagen de reemplazo
                        alt="Image not found"
                        className="w-12 h-12 object-contain"  // Ajusta el tamaño aquí
                      />
                    </div>
                  </div>
                )}
                {/* Contenido de la tarjeta */}
                <div className="p-4 md:p-5 bg-white border border-gray-200 rounded-b-lg">
                  <h3 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 h-12 overflow-hidden">
                    {attraction.name}
                  </h3>
                  <Link
                    to={`${attraction.id}`}
                    className="text-indigo-500 hover:text-indigo-700"
                  >
                    See more...
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
