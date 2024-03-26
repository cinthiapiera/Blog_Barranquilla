// import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { MainArticle } from "../components/MainArticle";
import { NewContainer } from "../components/NewContainer";
import backgroundSVG from "../assets/images/side-wave_background.svg"

export default function Home() {
  return (
    <main className="px-4 pt-6 h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundSVG})` }}>
      <Header />
      <div className="sm:flex gap-8">
        <MainArticle />
        <NewContainer />
      </div>
    </main>
  )
}