import burgerMenu from '../assets/images/icon-hamburger.svg'
export const NavBar = () => {
  return (
    <nav>
      <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#">Modelo1</a>
        </li>
        <li>
          <a href="#">Modelo2</a>
        </li>
        <li>
          <a href="#">Modelo3</a>
        </li>
      </ul>
      <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu Hamburger"/>
    </nav>
  )
}