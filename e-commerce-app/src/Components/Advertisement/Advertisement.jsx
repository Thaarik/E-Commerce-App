import React from "react";
import styled from "styled-components";
import { features } from "../../Api/ApiData.js";

const AdContainer = styled.div`
  width: 100%;
  height: 703px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const AdBackground = styled.div`
  width: 100%;
  height: 600px;
  background-color: rgba(46, 144, 229, 1);
  position: absolute;
  bottom: 0;
`;

const AdText = styled.div`
  max-width: 394px;
  height: 400px;
  z-index: 10;
  color: #fff;
  margin:50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AdTitle = styled.h1`
  font-weight: 400;
  font-size: 66px;
`;

const Adp = styled.p`
  /* padding-top: 25px; */
  font-size: 24px;
`;

const ShopNow = styled.div`
  padding-top: 55px;
  width: 85px;
  max-height: 25px;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 3px solid #fff;
  cursor:pointer;
  transition: all 0.7s ease-in-out;
  &:focus,
  &:hover {
    transform:scale(1.1);
  }
`;

const AdImageCont = styled.div`
  height: auto;
  z-index: 9;
`;

const AdImage = styled.img`
  max-width: 649px;
  width: 100%;
  height: auto;
`;

function Advertisement() {
  return (
    <AdContainer>
      <AdText>
        <AdTitle>iPhone 6 Plus</AdTitle>
        <Adp>Performance and design. Taken right to the edge.</Adp>
        <ShopNow>SHOP NOW</ShopNow>
      </AdText>
      <AdImageCont>
        <AdImage src={features[2].img} alt="#" />
      </AdImageCont>
      <AdBackground></AdBackground>
    </AdContainer>
  );
}

export default Advertisement;
