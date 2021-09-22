import React, { useState } from "react";
import style from "styled-components";
import Header from "./../Header/Header";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

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
  width: 300px;
  height: 18px;
  border: 1px solid blue;
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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    minWidth: 10,
    height: 10,
    paddingTop:1,
    paddingBottom:0,
    paddingLeft:1,
    paddingRight: 0,
    fontSize: 7,
    backgroundColor:'#ff1e56',
  },
}));

function Navbar() {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [selectLang, setSelectLang] = useState("EN");
  const [selectCurr, setSelectCurr] = useState("$");
  const languages = ["EN", "HI", "TA"];
  const currencies = ["$", "₹"];
  const Item=[4];
  return (
    <>
      <Container>
        <PageInfo>
          <Partone>
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
            <StyledBadge badgeContent={Item} color="secondary">
              <ShoppingCartIcon fontSize="small" />
            </StyledBadge>

            {/* <Profile>
                      
            </Profile> */}
            {/* <CartInfo>
            <Badge color="secondary" badgeContent={99}>
            <ShoppingCartIcon />
            </Badge>
            <NoOfItems>

            </NoOfItems>
            <TotalAmount>

            </TotalAmount>
            </CartInfo>
            <Search>

            </Search> */}
          </PartTwo>
        </PageInfo>
        <Header />
      </Container>
    </>
  );
}
export default Navbar;
