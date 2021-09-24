import React from "react";
import styled from "styled-components";
import { features } from "./../../Products/Products.js";

const AdContainer = styled.div`
  width: 100%;
  height: 703px;
  position: relative;
`;

const AdBackground = styled.div`
  width: 100%;
  height: 600px;
  background-color: rgba(46, 144, 229, 1);
  position: absolute;
  bottom: 0;
`;
const AdText = styled.div``;
const AdImageCont = styled.div`
  max-width: 649px;
  height: auto;
  position: absolute;
  right: 50px;
  z-index: 9;
`;
const AdImage = styled.img`
  width: 100%;
  height: auto;
`;

function Advertisement() {
  return (
    <AdContainer>
      <AdText></AdText>
      <AdImageCont>
        <AdImage src={features[2].img} alt="#" />
      </AdImageCont>
      <AdBackground></AdBackground>
    </AdContainer>
  );
}

export default Advertisement;
