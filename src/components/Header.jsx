import { NavBar } from "./NavBar"

export const Header = () => {
  return (
    <header className="bg-red-500 flex place-content-between">
        <a className="text-white" href="#">Descubre Barranquilla</a>
        <NavBar />
    </header>
  )
}