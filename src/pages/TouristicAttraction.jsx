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
      <div key={touristicAttraction.id}>
        <h3>{touristicAttraction.name}</h3>
        <p>{touristicAttraction.description}</p>
        <img src={touristicAttraction.images} alt={touristicAttraction.name}/>
      </div>
      
      <CommentsContainer category={'TouristicAttraction'} referentId={touristicAttraction.id}/>

      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}