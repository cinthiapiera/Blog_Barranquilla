import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTouristicAttractions } from "../services/colombia_api_service";
import SearchBar from "../components/SearchBar";
import "./touristicAttractions.css";

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
    <>
      <h1 className="col-span-full text-3xl font-bold tracking-wide ">
        Touristic Attractions
      </h1>
      <div className="mt-4 mb-4">
        <SearchBar
          searchItem={searchItem}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAttractions.length === 0 ? (
          <p className="col-span-full">No attractions found</p>
        ) : (
          filteredAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className=" border bg-slate-100 bg-opacity-60 backdrop-blur-sm rounded-lg p-5 shadow-lg transition-all ease-in-out delay-100 hover:scale-125 hover:z-10 "
            >
              <h3 className="text-xl font-semibold">{attraction.name}</h3>
              <p className="mt-2 mb-4 truncate-lines">
                {attraction.description}
              </p>
              <img
                src={attraction.images[0]}
                alt={attraction.name}
                className="rounded-lg w-auto h-auto"
              />
              <Link
                to={`${attraction.id}`}
                className="mt-2 block text-blue-600 hover:underline"
              >
                See more...
              </Link>
            </div>
          ))
        )}
        <button
          onClick={() => navigate(-1)}
          className="col-span-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go back
        </button>
      </div>
    </>
    // <>
    //   <h1>Touristic Attractions</h1>
    //   <SearchBar searchItem={searchItem} handleInputChange={handleInputChange}/>
    //   {filteredAttractions.length == 0 ? <p>No attractions found</p> :
    //   filteredAttractions.map((attraction) => (
    //     <div className="grid">
    //       <div key={attraction.id} >
    //       <h3>{attraction.name}</h3>
    //       <p>{attraction.description}</p>
    //       <img src={attraction.images[0]} alt={attraction.name}/>
    //       <Link to={`${attraction.id}`}>See more...</Link>
    //     </div>
    //     </div>
    //   ))}
    //   <button onClick={() => navigate(-1)}>Go back</button>
    // </>
  );
}
