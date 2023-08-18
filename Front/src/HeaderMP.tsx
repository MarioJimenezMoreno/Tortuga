import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, useDisclosure, Switch} from "@nextui-org/react";
import {MoonIcon} from "./IconComponents/MoonIcon";
import {SunIcon} from "./IconComponents/SunIcon";
import {Link} from 'react-scroll' 
import Login from "./Login";
import Register from "./Register";
import { ThemeProps } from "./types";
import React from 'react';

const HeaderMP = ({onThemeChange}:ThemeProps) => {
    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onOpenChange: onLoginOpenChange } = useDisclosure();
    const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();

    const [theme, setTheme] = React.useState("dark");

    const handleThemeChange = () => {
      setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
      onThemeChange();
    };

  return (
    <Navbar shouldHideOnScroll isBordered height="4rem" className="fixed">
    <NavbarBrand>
      <p className="font-bold text-inherit">Tortoise</p>
    </NavbarBrand>
    <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem isActive>
      <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">Home</Link>
      </NavbarItem>
      <NavbarItem>
      <Link to="info" spy={true} smooth={true} duration={500} className="cursor-pointer">Info</Link>
      </NavbarItem>
      <NavbarItem>
      <Link to="team" spy={true} smooth={true} duration={500} className="cursor-pointer">Team</Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="lg:flex">
      <Button onPress={onLoginOpen} color="primary">Login</Button>
          <Login isOpen={isLoginOpen} onOpenChange={onLoginOpenChange} theme={theme}/>
        </NavbarItem>
        <NavbarItem>
          <Button onPress={onRegisterOpen} color="primary">Register</Button>
          <Register isOpen={isRegisterOpen} onOpenChange={onRegisterOpenChange} theme={theme}/>
      </NavbarItem>
      <NavbarItem>    <Switch
      defaultSelected
      onChange={handleThemeChange}
      size="lg"
      color="primary"
      thumbIcon={({ isSelected}) =>
        isSelected ? (
          <MoonIcon/>          
        ) : (
          <SunIcon/>
        )
      }
    >
    </Switch></NavbarItem>
    </NavbarContent>
  </Navbar>
  );
};

export default HeaderMP;