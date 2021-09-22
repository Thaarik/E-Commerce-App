import React, { useState } from "react";
import style from "styled-components";
import Header from "./../Header/Header";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NavbarMenu from "./NavbarMenu";

const Container = style.div`
  height: 216px;
  width: 100%;
`;

const PageInfo = style.div`
  width: 100%;
  height: 36px;
  border-bottom: 3px solid #fafafb;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Partone = style.div`
  width: 100px;
  height: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PartTwo = style.div`
  min-width: 300px;
  height: auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const Lang = style.div`
  user-select: none;
  width: 40px;
  position: relative;
  cursor: pointer;
`;

const Currency = style.div`
  user-select: none;
  width: 40px;
  position: relative;
  cursor: pointer;
`;

const Dropdownbtn = style.div`
  padding: 5px;
  font-weight: 800;
  font-size: 14px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DropdownContent = style.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 4px;
  background-color: #fff;
  font-weight: 800;
  font-size: 14px;
`;

const DropdownItem = style.div`
  padding: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Profile = style.div`
max-width:100px;
color:#262626;
display:flex;
align-items:center;
cursor:pointer
`;

const ProfileName = style.p`
color:#262626;
font-size:14px;
font-weight:bold;
cursor:pointer
`;

const CartInfo = style.div`
width:130px;
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer
`;

const NoOfItems = style.p`
color:#262626;
font-size:14px;
font-weight:bold;
cursor:pointer

`;

const TotalAmount = style.div`
color:#262626;
font-size:14px;
font-weight:bold;
opacity:0.5;
cursor:pointer
`;

const Search = style.div`
cursor:pointer
`;
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    minWidth: 15,
    height: 15,
    padding: 1,
    fontSize: 10,
    backgroundColor: "#ff1e56",
    color: "white",
  },
}));

function Navbar() {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [selectLang, setSelectLang] = useState("EN");
  const [selectCurr, setSelectCurr] = useState("$");
  const languages = ["EN", "HI", "TA"];
  const currencies = ["$", "₹"];
  const Item = [4];
  return (
    <>
      <Container>
        <PageInfo>
          <Partone>
            {/* language Settings */}
            <Lang>
              <Dropdownbtn onClick={(e) => setIsActiveOne(!isActiveOne)}>
                {selectLang}
                {isActiveOne ? (
                  <ArrowDropUpIcon fontSize="small" />
                ) : (
                  <ArrowDropDownIcon fontSize="small" />
                )}
              </Dropdownbtn>
              {isActiveOne && (
                <DropdownContent>
                  {languages.map((language) => (
                    <DropdownItem
                      onClick={(e) => {
                        setSelectLang(language);
                        setIsActiveOne(false);
                      }}
                    >
                      {language}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              )}
            </Lang>

            {/* Currency Settings */}

            <Currency>
              <Dropdownbtn onClick={() => setIsActiveTwo(!isActiveTwo)}>
                {selectCurr}
                {isActiveTwo ? (
                  <ArrowDropUpIcon fontSize="small" />
                ) : (
                  <ArrowDropDownIcon fontSize="small" />
                )}
              </Dropdownbtn>
              {isActiveTwo && (
                <DropdownContent>
                  {currencies.map((currency) => (
                    <DropdownItem
                      onClick={(e) => {
                        setSelectCurr(currency);
                        setIsActiveTwo(false);
                      }}
                    >
                      {currency}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              )}
            </Currency>
          </Partone>
          <PartTwo>
            {/* Profile  */}

            <Profile>
              <PersonOutlineIcon />
              <ProfileName>My profile</ProfileName>
            </Profile>

            {/* Cart Details */}
            <CartInfo>
              <StyledBadge badgeContent={Item}>
                <ShoppingCartIcon fontSize="medium" />
              </StyledBadge>
              <NoOfItems>2 items</NoOfItems>
              <TotalAmount>$998</TotalAmount>
            </CartInfo>

            {/* Search */}

            <Search>
              <SearchIcon />
            </Search>
          </PartTwo>
        </PageInfo>
        <Header />
        <NavbarMenu />
      </Container>
    </>
  );
}
export default Navbar;
