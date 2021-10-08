import React, { useState } from "react";
import styled from "styled-components";
import Header from "./../Components/Navbar/Navbar";
import Ad from "./../Components/Advertisement/Advertisement";
import { Pagination, Slider } from "@mui/material";
import { products, dropdown, brands } from "./../Api/ApiData.js";
import Products from "./../Components/Products/Products";
const Container = styled.div`
  /* background-color: aliceblue; */
  width: 1170px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;
const ProductsFilter = styled.div`
  flex: 0.65;
`;
const ProductsContainer = styled.div`
  flex: 2;
  max-width: 870px;
  width: 100%;
  height: auto;
  padding: 15px 0;
`;
const Accessories = styled.div`
  max-width: 270px;
  min-height: 371px;
  background-color: #f6f7f8;
  margin: 15px 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const Prices = styled.div`
  max-width: 270px;
  min-height: 144px;
  background-color: #f6f7f8;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;
const Color = styled.div`
  max-width: 270px;
  min-height: 144px;
  background-color: #f6f7f8;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;
const Brand = styled.div`
  max-width: 270px;
  min-height: 245px;
  background-color: #f6f7f8;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 870px;
  height: auto;
  width: 100%;
`;

const PaginationWrapper = styled.div`
  max-width: 870px;
  width: 100%;
  background-color: #fafafb;
  display: flex;
  justify-content: center;
`;
const ATitle = styled.p`
  color: #22262a;
  font-size: 18px;
  font-weight: 600;
`;
const Items = styled.div`
  color: #262626;
  font-size: 14px;
  font-weight: 600;
`;
const PTitle = styled.div`
  color: #22262a;
  font-size: 18px;
  font-weight: 600;
`;
const PSlider = styled.div`
  max-width: 235px;
  width: 100%;
`;
const CTitle = styled.p`
  color: #22262a;
  font-size: 18px;
  font-weight: 600;
`;
const CChoice = styled.div`
  max-width: 240px;
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BlueBorder = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f7f8;
  &:hover,
  &:focus {
    transition: all 0.5s ease;
    border-color: #006cff;
  }
`;
const Blue = styled.div`
  width: 21px;
  height: 21px;
  background-color: #006cff;
  border-radius: 50%;
  cursor: pointer;
`;
const RedBorder = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f7f8;
  &:hover,
  &:focus {
    transition: all 0.5s ease;
    border-color: #fc3e39;
  }
`;
const Red = styled.div`
  width: 21px;
  height: 21px;
  background-color: #fc3e39;
  border-radius: 50%;
  cursor: pointer;
`;
const BlackBorder = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f7f8;
  &:hover,
  &:focus {
    transition: all 0.5s ease;
    border-color: #171717;
  }
`;
const Black = styled.div`
  width: 21px;
  height: 21px;
  background-color: #171717;
  border-radius: 50%;
  cursor: pointer;
`;
const YellowBorder = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f7f8;
  &:hover,
  &:focus {
    transition: all 0.5s ease;
    border-color: #fff600;
  }
`;
const Yellow = styled.div`
  width: 21px;
  height: 21px;
  background-color: #fff600;
  border-radius: 50%;
  cursor: pointer;
`;
const PinkBorder = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f7f8;
  &:hover,
  &:focus {
    transition: all 0.5s ease;
    border-color: #ff00b4;
  }
`;
const Pink = styled.div`
  width: 21px;
  height: 21px;
  background-color: #ff00b4;
  border-radius: 50%;
  cursor: pointer;
`;
const WhiteBorder = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f6f7f8;
  &:hover,
  &:focus {
    transition: all 0.5s ease;
    border-color: #ffffff;
  }
`;
const White = styled.div`
  width: 21px;
  height: 21px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
`;
const BTitle = styled.p`
  color: #22262a;
  font-size: 18px;
  font-weight: 600;
`;
const BName = styled.div`
  color: #262626;
  font-size: 16px;
  font-weight: 600;
`;
const minDistance = 10;

function valuetext(value) {
  return `${value}`;
}
function ProductPage() {
  const [value, setValue] = useState([10, 1000]);
  const handleChangeValue = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const [noOfPages] = useState(Math.ceil(products.length / itemsPerPage));
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Header />
      <Container>
        <ProductsFilter>
          <Accessories>
            <ATitle>ACCESSORIES</ATitle>
            {dropdown.map(
              (accessories) =>
                accessories.type === "accessories" && (
                  <Items>{accessories.product}</Items>
                )
            )}
          </Accessories>
          <Prices>
            <PTitle>PRICE</PTitle>
            <PSlider>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={value}
                onChange={handleChangeValue}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
              />
            </PSlider>
          </Prices>
          <Color>
            <CTitle>COLOR</CTitle>
            <CChoice>
              <BlueBorder>
                <Blue></Blue>
              </BlueBorder>
              <RedBorder>
                <Red></Red>
              </RedBorder>
              <BlackBorder>
                <Black></Black>
              </BlackBorder>
              <YellowBorder>
                <Yellow></Yellow>
              </YellowBorder>
              <PinkBorder>
                <Pink></Pink>
              </PinkBorder>
              <WhiteBorder>
                <White></White>
              </WhiteBorder>
            </CChoice>
          </Color>
          <Brand>
            <BTitle>Brands</BTitle>
            {brands.map((brand) => (
              <BName>{brand.brand}</BName>
            ))}
          </Brand>
        </ProductsFilter>
        <ProductsContainer>
          <Ad width={"870px"} height={"340px"} />
          <Wrapper>
            {products
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((product) => (
                <Products key={product.id} details={product} hot={false} />
              ))}
          </Wrapper>
          <PaginationWrapper>
            <Pagination
              count={noOfPages}
              variant="outlined"
              shape="rounded"
              size="large"
              color="primary"
              page={page}
              onChange={handleChange}
              defaultPage={1}
            />
          </PaginationWrapper>
        </ProductsContainer>
      </Container>
    </>
  );
}

export default ProductPage;
