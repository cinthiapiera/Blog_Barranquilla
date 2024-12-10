import { useState, useEffect } from "react";
import burgerMenu from "../assets/images/icon-hamburger.svg";
import closeMenu from "../assets/images/icon-close.svg";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle para abrir/cerrar el menú
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Cerrar el menú si la pantalla es más grande que 768px (por ejemplo, en md o superior)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Agregar el listener
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize al cargar el componente para comprobar el tamaño inicial
    handleResize();

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      {/* Logo */}
      <a className="text-xl text-gray-800 font-bold" href="#">
        Descubre Barranquilla
      </a>
      {/* Menú para pantallas grandes */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Destinos Turísticos
          </a>
        </li>
      </ul>

      {/* Botón Menú Hamburguesa */}
      <img
        className="w-10 h-6 cursor-pointer sm:hidden"
        src={isMenuOpen ? closeMenu : burgerMenu} // Cambiar entre "hamburguesa" y "X"
        alt="Menu"
        onClick={toggleMenu}
      />
      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4">
          <li>
            <a href="#" className="block text-gray-800 font-medium hover:text-blue-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-800 font-medium hover:text-blue-500">
              Destinos Turísticos
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};