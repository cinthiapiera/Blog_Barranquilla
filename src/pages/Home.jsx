import { Header } from "../components/Header";
import { MainArticle } from "../components/MainArticle";
import { NewContainer } from "../components/NewContainer";
// import backgroundSVG from "../assets/images/bg_abstract.svg" style={{ backgroundColor: `#f0faf2` }}

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />
      <MainArticle />
      <NewContainer />
    </div>
  )
}