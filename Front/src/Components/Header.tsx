import { Navbar, NavbarBrand } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import MainPageRoutes from "./Header/MainPageRoutes";
import MainPageButtons from "./Header/MainPageButtons";
import AppRoutes from "./Header/AppRoutes";
import AppButtons from "./Header/AppButtons";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar height="10vh" isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Tortoise</p>
      </NavbarBrand>
      {location.pathname === "/" ? <MainPageRoutes /> : <AppRoutes />}
      {location.pathname === "/" ? <MainPageButtons /> : <AppButtons />}
    </Navbar>
  );
};

export default Header;
