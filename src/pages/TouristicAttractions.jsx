import { Link, useNavigate } from "react-router-dom";

export default function TouristicAttractions() {
  const navigate = useNavigate()
  return (
    <>
      <div>Touristic Attractions</div>
      <Link to={`${1}`}>Touristic Attraction</Link>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}