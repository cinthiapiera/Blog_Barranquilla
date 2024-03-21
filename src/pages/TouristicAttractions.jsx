import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTouristicAttractions } from "../services/colombia_api_service";
import SearchBar from "../components/SearchBar";

export default function TouristicAttractions() {
  const navigate = useNavigate()
  const [touristicAttractions, setTouristicAttractions] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [filteredAttractions, setFilteredAttractions] = useState([])

  useEffect(() => {
    const showTouristicAttractions = async () => {
      const data = await getTouristicAttractions()
      setTouristicAttractions(data)
      setFilteredAttractions(data)
    }
    showTouristicAttractions()
  }, [])

  const handleInputChange = (e) => {
    setSearchItem(e.target.value)
  }

  useEffect(() => {
    setFilteredAttractions(touristicAttractions.filter((attraction) => attraction.name.toLowerCase().includes(searchItem.toLowerCase())))
  }, [searchItem])

  return (
    <>
      <h1>Touristic Attractions</h1>
      <SearchBar searchItem={searchItem} handleInputChange={handleInputChange}/>
      {filteredAttractions.length == 0 ? <p>No attractions found</p> : 
      filteredAttractions.map((attraction) => (
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