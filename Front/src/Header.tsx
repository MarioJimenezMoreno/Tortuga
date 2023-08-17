import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar height="10vh">
    <NavbarBrand>
      <p className="font-bold text-inherit">Tortoise</p>
    </NavbarBrand>
    <NavbarContent className="sm:flex gap-4" justify="center">
    <NavbarItem>
      <Link to="/app" color="foreground">
        Agenda
        </Link>
      </NavbarItem>
      <NavbarItem>
      <Link to="/stats" color="foreground">
        Analytics
        </Link>
      </NavbarItem>
      <NavbarItem>
      <Link to="/profile" color="foreground">
          Profile
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">mariojm2612@gmail.com</p>
            </DropdownItem>
            {/* @ts-ignore */}
            <DropdownItem as={Link} to="/profile">Profile</DropdownItem>
            <DropdownItem key="system">My membership</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            {/* @ts-ignore */}
            <DropdownItem as={Link} to="/" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </NavbarContent>
  </Navbar>
  );
};

export default Header;