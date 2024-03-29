import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTouristicAttractions } from "../services/colombia_api_service";
import SearchBar from "../components/SearchBar";
import { BiArrowBack } from "react-icons/bi";

export default function TouristicAttractions() {
  const navigate = useNavigate();
  const [touristicAttractions, setTouristicAttractions] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredAttractions, setFilteredAttractions] = useState([]);

  useEffect(() => {
    const showTouristicAttractions = async () => {
      const data = await getTouristicAttractions();
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
  }, [searchItem]);

  return (
    <section className="text-blueGray-700 body-font mb-8">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8 md:w-full">
          <div className="flex items-center md:w-auto mb-4 md:mb-0">
            <BiArrowBack />
            <button onClick={() => navigate(-1)} className="text-xs font-semibold tracking-widest text-black uppercase title-font ml-2">Volver</button>
          </div>
          <div className="flex items-center">
            <SearchBar searchItem={searchItem} handleInputChange={handleInputChange} className="w-full lg:w-64 leading-relaxed text-base" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAttractions.length === 0 ? <p>No attractions found</p> :
            filteredAttractions.map((attraction) => (
              <div key={attraction.id} className="relative">
                {attraction.images && attraction.images.length > 0 ? (
                  <img src={attraction.images[0]} alt={attraction.name} className="h-64 md:h-72 w-full rounded-t-lg object-cover" />
                ) : (
                  <div className="h-64 md:h-72 w-full bg-gray-200 rounded-t-lg"></div>
                )}
                <div className="p-4 md:p-5 bg-white border border-gray-200">
                  <h3 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 h-12 overflow-hidden">{attraction.name}</h3>
                  <Link to={`${attraction.id}`} className="text-indigo-500 hover:text-indigo-700">See more...</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
