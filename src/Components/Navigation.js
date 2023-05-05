import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {images, index} from "../constants";
import Register from '../pages/Register';
import { motion } from "framer-motion";

const COLOR_PRIMARY = '#e53935';
const COLOR_TEXT = '#333';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);



  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  height: 70px;
  margin-left: 20px;
  width : 70px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
  margin-right: 100px;
  @media (max-width: 768px) {
    margin-top: 10px;
    flex-wrap: wrap;
  }
`;

// search animation:
const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  margin-left: 20px;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #555;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 2px solid #e8e8e8;
  margin: 0 20px;
  width: 50%;
  font-size: 16px;
  background-color: #f2f2f2;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    width: 70%;
    border: 2px solid #555;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
    margin: 0 10px;
    width: 100%;
  }
  }
`;

const UserIcon = styled(Icon)`
position: relative;

&:hover {
  color: #555;
}

&:hover .dropdown {
  display: block;
  animation: slide-in-top 0.2s ease-out;
}
`;

const Dropdown = styled.div`
display: none;
position: absolute;
top: 30px;
right: 0;
min-width: 120px;
padding: 10px;
background-color: #fff;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
border-radius: 4px;
z-index: 100;

&::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #fff transparent;
}
`;

const DropdownItem = styled.div`
font-size: 14px;
margin-bottom: 5px;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
  color: #fff;
  background-color: #eee;
}
`;
const NavContainer = styled(motion.div)`
  width:100%;
  height: 12vh;
  position: fixed;
  left:0;right:0;
  z-index:10;
  .logo {
    width: 100px;

    @media only screen and (max-width: 768px) {
    width: 80px;
  }

  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
  }

  /* Add animation to the background color */
  transition: background-color 0.2s ease-in-out;

  /* Change the background color when hovering over the links */
  &:hover {
    background-color: #f7f7f7;
  }
`;
const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #333;

  /* Add a transition to the color */
  transition: color 0.2s ease-in-out;

  /* Change the color when hovering over the logo */
  &:hover {
    color: ${COLOR_PRIMARY};
  }
`;

const NavLink = styled(Link)`
  margin-left: 1rem;
  color: ${COLOR_TEXT};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${COLOR_PRIMARY};
    transition: width 0.3s;
  }

  &:hover:before {
    width: 100%;
  }
`;

const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleMenuItemClick = (menuItem) => {
    alert(`You clicked ${menuItem}`);
  };



//userDropDown:
const UserDropdown = () => {
  return (
    <Dropdown className="dropdown">
        <DropdownItem>
          <NavLink to="/signup">Sign Up</NavLink>
          </DropdownItem>
        <DropdownItem>
          <NavLink to="/login">Log in</NavLink>
        </DropdownItem>
    </Dropdown>
  );
};

  return (
    <NavContainer
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 120 }}
  >
    <NavLogo to="/"><img src={images.logo} alt="" className='logo'/></NavLogo>
    <Input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchInputChange}
      />
    <Icons>
      <Icon className="fas fa-search"></Icon>
      <NavLink to="/Cart">
        <Icon className="fas fa-shopping-cart"></Icon>
      </NavLink>
        <UserIcon className="fas fa-user">
          <UserDropdown />
        </UserIcon>
    </Icons>
      
    <Menu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Product">Products</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </Menu>


  </NavContainer>
  );
}

export default Navigation;
