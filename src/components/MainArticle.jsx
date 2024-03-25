import { Link } from "react-router-dom";
import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile}/>
        <source media="(min-width: 641px)" srcSet={imageDesktop}/>
        <img src={imageMobile} alt="articulo principal" />
      </picture>
      <div className='sm:flex'>
        <div className="flex-1 py-6"> 
          <h2 className="text-[40px] font-bold sm:text-[58px] leading-none">Nuestros lugares turisticos</h2> 
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 sm:text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt officia quisquam culpa ducimus ad vel at neque minus doloremque, natus illo quia, eveniet modi delectus praesentium sint excepturi accusamus.</p>
          <Link to={"TouristicAttractions"} className="flex items-center justify-center bg-slate-950 w-48 h-12 text-white hover:bg-blue-800">Touristic Attractions</Link>
        </div>
      </div>
    </section>
  )
}