import React, { useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DropdownStore from "./DropdownStore";

const MenuContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: 20px;
  max-width: 900px;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: #2e90e5;
    transition: all 0.5s ease-in-out;
  }
`;
const Dropdown = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 30px 30px #0000001a;
  border-radius: 0px 0px 4px 4px;
  z-index: 9;
  max-width: 1029px;
  width: 100%;
  height: 325px;
  position: absolute;
  top: 150%;
  right: 0;
`;
function NavbarMenu() {
  const [storeActive, setStoreActive] = useState(false);

  return (
    <>
      <MenuContainer>
        <Menu>HOME</Menu>
        <Menu onClick={(e) => setStoreActive(!storeActive)}>
          STORE{" "}
          <span>
            {storeActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </span>
        </Menu>
        {storeActive && (
          <Dropdown>
            <DropdownStore />
          </Dropdown>
        )}

        <Menu>IPHONE</Menu>
        <Menu>IPAD</Menu>
        <Menu>MACBOOK</Menu>
        <Menu>ACCESSORIES</Menu>
      </MenuContainer>
    </>
  );
}

export default NavbarMenu;
