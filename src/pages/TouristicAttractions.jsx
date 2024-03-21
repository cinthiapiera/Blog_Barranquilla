import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTouristicAttractions } from "../services/colombia_api_service";

export default function TouristicAttractions() {
  const navigate = useNavigate()
  const [touristicAttractions, setTouristicAttractions] = useState([])

  useEffect(() => {
    const showTouristicAttractions = async () => {
      const data = await getTouristicAttractions()
      setTouristicAttractions(data)
    }
    showTouristicAttractions()
  }, [])

  return (
    <>
      <h1>Touristic Attractions</h1>
      {touristicAttractions.map((attraction) => (
        <div key={attraction.id}>
          <h3>{attraction.name}</h3>
          <p>{attraction.description}</p>
          <img src={attraction.images[0]} alt={attraction.name}/>
          <Link to={`${attraction.id}`}>See more...</Link>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}