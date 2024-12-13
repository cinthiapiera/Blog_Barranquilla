import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTouristicAttractions } from "../services/colombia_api_service";
import SearchBar from "../components/SearchBar";
import { BiArrowBack } from "react-icons/bi";
import imagenotfound from "../assets/images/not_found.jpg";
// import imagenotfound from "../assets/images/photo_not_found.svg";

export default function TouristicAttractions() {
  const navigate = useNavigate();
  const [touristicAttractions, setTouristicAttractions] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredAttractions, setFilteredAttractions] = useState([]);
  const fallbackImage = imagenotfound;

  useEffect(() => {
    const showTouristicAttractions = async () => {
      const data = await getTouristicAttractions();
      console.log("Touristic attractions data:", data);
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

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
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
              className="flex items-center text-gray-800 hover:text-blue-700"
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
                {/* Imagen*/}
                {attraction.images && Array.isArray(attraction.images) && attraction.images.length > 0 ? (
                  <img
                    src={attraction.images[0]}
                    alt={attraction.name}
                    className="h-64 md:h-72 w-full rounded-t-lg object-cover"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="h-64 md:h-72 w-full bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-300 rounded">
                      <img
                        src={fallbackImage}
                        alt="Image not found"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                )}
                {/* Contenido de la tarjeta */}
                <div className="p-4 md:p-5 bg-white border border-gray-200 rounded-b-lg">
                  <h3 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-blue-700 h-12 overflow-hidden">
                    {attraction.name}
                  </h3>
                  <Link
                    to={`${attraction.id}`}
                    className="text-gray-800 hover:text-blue-700"
                  >
                    Ver detalles...
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
