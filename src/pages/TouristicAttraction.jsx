import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTouristicAttractionById } from "../services/colombia_api_service";
import CommentsContainer from "../components/CommentsContainer";

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
      <h1 className="col-span-full text-3xl font-bold tracking-wide">{touristicAttraction.name}</h1>

      <div className="flex flex-col gap-12 md:flex-row">
        <div key={touristicAttraction.id} className="flex flex-col justify-center items-center gap-4">
          <div className="size-4/6">
            <img className="size-full" src={touristicAttraction.images} alt={touristicAttraction.name}/>
          </div>
          <p>{touristicAttraction.description}</p>
        </div>
        
        <CommentsContainer category={'TouristicAttraction'} referentId={touristicAttraction.id}/>
      </div>

      <button 
        onClick={() => navigate(-1)}
        className="col-span-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >Go back</button>
    </>
  )
}