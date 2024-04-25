// Navbar.jsx
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import React, { useState, useContext } from "react";
/* import { ShoppingCartContext } from "../../context";
 */

export default function NavbarXL() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  /*   const context = useContext(ShoppingCartContext);
   */
  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Mi cuenta", href: "/my-account" },
    { label: "Proyectos", href: "/products" },
    { label: "Soporte", href: "/support" },
    { label: "Contacto", href: "/contact" },
    { label: "Salir", href: "/logout" },
  ];

  return (
    <Navbar shouldHideOnScroll className="bg-texto-primario">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            isZoomed
            isBlurred
            width={40}
            alt="Arkibit logo"
            src="./arkibit_logo.webp"
          />
          <p className="font-bold text-white">ARKIBIT</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu className="bg-texto-primario text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link href={item.href} className="text-white" size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" className="text-white hover:text-fondo-primario">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/products" className="text-white  hover:text-fondo-primario">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/support" className="text-white hover:text-fondo-primario">
            Aprender
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-white hover:text-texto-resaltado">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isLogged ? (
          <NavbarItem className="hidden lg:flex">
            <Link href="/my-account" className="text-texto-resaltado">
              Mi cuenta
            </Link>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login" className="text-white">
              Iniciar sesión
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Button as={Link} href="/signup" className="text-white bg-detalles" variant="flat">
            Crear cuenta
          </Button>
        </NavbarItem>
        {/*         <NavbarItem>
          <Button color="default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>
              {context.count}
            </span>
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
