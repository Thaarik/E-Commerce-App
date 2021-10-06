import React from "react";
import styled from "styled-components";
import iphone from "./../../Images/Web/iphone_6_plus.svg"

const AdContainer = styled.div`
  max-width: ${props=>props.width};
  max-height:  ${props=>props.height};
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const AdBackground = styled.div`
  width: 100%;
  height:100%;
  background-color: rgba(46, 144, 229, 1);
  position: absolute;
  bottom: 0;
`;

const AdText = styled.div`
  max-width: 394px;
  height:  ${props=>props.width<"870px"?"400px":"180px"};
  z-index: 10;
  color: #fff;
  margin:50px;
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AdTitle = styled.h1`
  font-weight: 400;
  font-size: ${props=>props.width<"870px"?"66px":"42px"};
`;

const Adp = styled.p`
  font-size:  ${props=>props.width<"870px"?"24px":"16px"};
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
  z-index: 5;
`;

const AdImage = styled.img`
  max-width: ${props=>props.width<"870px"?"649px":"360px"};
  width: 100%;
  height: auto;
`;

function Advertisement({height,width}) {
  return (
    <AdContainer height={height} width={width}>
      <AdText>
        <AdTitle  width={width}>iPhone 6 Plus</AdTitle>
        <Adp width={width}>Performance and design. Taken right to the edge.</Adp>
        <ShopNow>SHOP NOW</ShopNow>
      </AdText>
      <AdImageCont>
        <AdImage width={width} src={iphone} alt="#" />
      </AdImageCont>
      <AdBackground></AdBackground>
    </AdContainer>
  );
}

export default Advertisement;
