import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: 20px;
  max-width: 900px;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.div`
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #2e90e5;
    font-size: 14.5px;
    transition: all 0.5s ease-in-out;
  }
`;
function NavbarMenu() {
  return (
    <>
      <MenuContainer>
        <Menu>HOME</Menu>
        <Menu>STORE</Menu>
        <Menu>IPHONE</Menu>
        <Menu>IPAD</Menu>
        <Menu>MACBOOK</Menu>
        <Menu>ACCESSORIES</Menu>
      </MenuContainer>
    </>
  );
}

export default NavbarMenu;
