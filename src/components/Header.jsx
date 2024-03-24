import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
        <a className="max-w-lg text-xl font-semibold leading-none text-gray-900" href="#">Descubre Barranquilla</a>
        <NavBar />
    </header>
  )
}