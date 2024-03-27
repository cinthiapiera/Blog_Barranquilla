import { Link } from "react-router-dom";
import imageMobile from '../assets/images/mobile.png'
import imageDesktop from '../assets/images/web.png'

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
          <h2 className="text-gray-800 text-[40px] font-bold sm:text-[58px] leading-none">Nuestros encantos turísticos</h2> 
        </div>
        <div className="flex-1 pt-9">
          <p className="text-[13px] mb-10 sm:text-[15px]">Adéntrate en la diversidad de nuestra ciudad con una selección cuidadosa de destinos turísticos. Desde playas hasta la rica vida nocturna, encuentra todo lo que nuestra ciudad tiene para ofrecer.</p>
          <Link to={"TouristicAttractions"} className="flex items-center justify-center w-48 h-12  text-white bg-SoftBlue font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ver destinos</Link>
        </div>
      </div>
    </section>
  )
}