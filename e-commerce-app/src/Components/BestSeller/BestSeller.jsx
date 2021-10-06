import React, { useState } from "react";
import styled from "styled-components";
import { products } from "../../Api/ApiData.js";
import Products from "../Products/Products.jsx";
const Container = styled.div`
  max-width: 1225px;
  margin: 60px auto;
  color: #22262a;
`;

const BestSellerTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const BestSellerCategory = styled.div`
  margin: 30px auto;
  max-width: 470px;
  height: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Category = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:focus,
  &:hover {
    color: #33a0ff;
    padding-bottom: 8px;
    border-bottom: 2px solid #33a0ff;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: all 1s;
`;

const LoadMore = styled.div`
  margin: 90px auto 20px auto;
  max-width: 80px;
  height: 17px;
  font-size: 14px;
  color: #33a0ff;
  font-weight: 600;
  border-bottom: 3px solid #33a0ff;
  padding-bottom: 5px;
  cursor: pointer;
`;

function BestSeller() {
  let filteredProducts = products.filter(
    (product) => product.bestSeller === true
  );
  const [display, setDisplay] = useState(filteredProducts);
  const CategoryFilter = (category) => {
    filteredProducts = filteredProducts.filter((product) => {
      if (category !== "all") {
        return product.category === category;
      } else {
        return product;
      }
    });
    setDisplay(filteredProducts);
  };
  const [noOfProducts, setNoOfProducts] = useState(
    filteredProducts.length > 8 ? 8 : filteredProducts.length
  );

  const visible = display.slice(0, noOfProducts);
  const loadmore = () => {
    setNoOfProducts(noOfProducts + 4);
  };
  return (
    <>
      <Container>
        <BestSellerTitle>BestSeller</BestSellerTitle>
        <BestSellerCategory>
          <Category onClick={() => CategoryFilter("all")}>All</Category>
          <Category onClick={() => CategoryFilter("Mac")}>Mac</Category>
          <Category onClick={() => CategoryFilter("iPhone")}>iPhone</Category>
          <Category onClick={() => CategoryFilter("iPad")}>iPad</Category>
          <Category onClick={() => CategoryFilter("iPod")}>iPod</Category>
          <Category onClick={() => CategoryFilter("Accessories")}>
            Accessories
          </Category>
        </BestSellerCategory>
        <Wrapper>
          {visible.map((product) => (
            <Products key={product.id} details={product} />
          ))}
        </Wrapper>

        {display.length > 8 && noOfProducts < display.length ? (
          <LoadMore onClick={() => loadmore()}>Load More</LoadMore>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default BestSeller;
