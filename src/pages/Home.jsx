// import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { MainArticle } from "../components/MainArticle";

export default function Home() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <MainArticle />
      {/* <Link to={"TouristicAttractions"}>Touristic Attractions</Link> */}
    </main>
  )
}