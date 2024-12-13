import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTouristicAttractionById } from "../services/colombia_api_service";
import CommentsContainer from "../components/CommentsContainer";
import { BiArrowBack } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function TouristicAttraction() {
  let params = useParams();
  const navigate = useNavigate();
  const [touristicAttraction, setTouristicAttraction] = useState({});

  useEffect(() => {
    const showTouristicAttraction = async () => {
      const data = await getTouristicAttractionById(params.id);
      setTouristicAttraction(data);
    };
    showTouristicAttraction();
  }, []);

  return (
    <>
      <section className="text-blueGray-700 mt-4">
        <div className="container flex flex-col items-center px-5 py-12 mx-auto md:flex-row lg:px-16 bg-white shadow-lg rounded-lg">
          {/* Información principal */}
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 md:mb-0">
            {/* Botón Volver */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-800 hover:text-blue-700 text-sm font-semibold tracking-wide"
              >
                <BiArrowBack className="mr-2 text-lg" />
                Volver
              </button>
            </div>
            {/* Título */}
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-blue-700 md:text-5xl">
              {touristicAttraction.name}
            </h1>
            {/* Descripción */}
            <p className="mb-8 text-lg leading-relaxed text-gray-800">
              {touristicAttraction.description}
            </p>
          </div>

          {/* Imagen destacada */}
          <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg shadow-lg h-80 w-full"
              src={touristicAttraction.images}
              alt={touristicAttraction.name}
            />
            {/* Sección Compartir */}
            <div className="flex flex-col items-center mt-6">
              <p className="text-center text-gray-600 font-medium mb-2">
                Compartir:
              </p>
              <div className="flex space-x-4">
                <button
                  className="bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700"
                  aria-label="Compartir en Facebook"
                >
                  <FaFacebook size={24} />
                </button>
                <button
                  className="bg-blue-400 text-white p-2 rounded-full shadow-md hover:bg-blue-500"
                  aria-label="Compartir en Twitter"
                >
                  <FaTwitter size={24} />
                </button>
                <button
                  className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-2 rounded-full shadow-md hover:from-pink-600 hover:to-orange-500"
                  aria-label="Compartir en Instagram"
                >
                  <FaInstagram size={24} />
                </button>
                <button
                  className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600"
                  aria-label="Compartir en WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor de comentarios */}
      <section className="mt-8">
        <CommentsContainer
          category={"TouristicAttraction"}
          referentId={touristicAttraction.id}
        />
      </section>
    </>
  );
}