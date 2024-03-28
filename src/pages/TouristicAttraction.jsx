import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTouristicAttractionById } from "../services/colombia_api_service";
import CommentsContainer from "../components/CommentsContainer";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function TouristicAttraction() {
  let params = useParams();
  const navigate = useNavigate()
  const [touristicAttraction, setTouristicAttraction] = useState({})

  useEffect(() => {
    const showTouristicAttraction = async () => {
      const data = await getTouristicAttractionById(params.id)
      setTouristicAttraction(data)
    }
    showTouristicAttraction()
  }, [])

  return (
    <>
      <section className="text-blueGray-700 mt-4">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-16">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 md:mb-0">
            <div className="flex items-center mb-8">
              <RiArrowGoBackFill />
              <div className="ml-2">
                <button onClick={() => navigate(-1)} className="text-xs font-semibold tracking-widest text-black uppercase title-font">Volver</button>
              </div>
            </div>
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">{touristicAttraction.name}</h1>
            <div key={touristicAttraction.id}>
              <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">{touristicAttraction.description}</p>
            </div>
            {/* <div className="flex flex-col justify-center lg:flex-row">
                <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </button>
            </div> */}
          </div>
          <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img className="object-cover object-center rounded-lg h-80 w-full" src={touristicAttraction.images} alt={touristicAttraction.name}/>
            <div className="flex justify-center mt-4">
              <p className="text-center mb-2">Compartir:</p>
              <div className="flex justify-center">
                <button className="mx-2">
                  <FaFacebook size={32} />
                </button>
                <button className="mx-2">
                  <FaTwitter size={32} />
                </button>
                <button className="mx-2">
                  <FaInstagram size={32} />
                </button>
                <button className="mx-2">
                  <FaWhatsapp size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommentsContainer category={'TouristicAttraction'} referentId={touristicAttraction.id}/>
    </>
  )
}