import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliders } from "./../../Api/ApiData.js";

const Container = styled.div`
  width: 100%;
  max-height: 650px;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  z-index: 9;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.7s ease-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = styled.div`
  width: 100vw;
  max-height: 650px;
  display: flex;
  align-items: center;
  position: relative;
`;

const ImageConatiner = styled.div`
  height: auto;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 3vw;
  left: 3vw;
  z-index: 10;
  padding: 50px;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 3.5vw;
`;

const Description = styled.p`
  padding-top: 20px;
  color: #fff;
  font-size: 1.5vw;
`;

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliders.length - 1);
    } else {
      setSlideIndex(slideIndex < sliders.length - 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftIcon style={{ fontSize: "40px" }} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliders.map((slider) => (
            <Slider key={slider.id}>
              <ImageConatiner>
                <Image src={slider.img} />
                <InfoContainer>
                  <Title>{slider.title}</Title>
                  <Description>{slider.description}</Description>
                </InfoContainer>
              </ImageConatiner>
            </Slider>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightIcon style={{ fontSize: "40px" }} />
        </Arrow>
      </Container>
    </>
  );
}

export default Carousel;
