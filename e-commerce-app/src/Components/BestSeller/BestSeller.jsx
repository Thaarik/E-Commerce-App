import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1120px;
  margin: 60px auto;
  background-color: beige;
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
  flex-wrap: wrap;
`;

const Product = styled.div``;
const Hot = styled.div``;
const ProductImage = styled.div``;
const ProductTitle = styled.p``;
const Rating = styled.div``;
const Price = styled.div``;

function BestSeller() {
  return (
    <>
      <Container>
        <BestSellerTitle>BestSeller</BestSellerTitle>
        <BestSellerCategory>
          <Category>All</Category>
          <Category>Mac</Category>
          <Category>iPhone</Category>
          <Category>iPad</Category>
          <Category>iPod</Category>
          <Category>Accessories</Category>
        </BestSellerCategory>
        <Wrapper>
          <Product>
            <Hot></Hot>
            <ProductImage></ProductImage>
            <ProductTitle></ProductTitle>
            <Rating></Rating>
            <Price></Price>
          </Product>
        </Wrapper>
      </Container>
    </>
  );
}

export default BestSeller;
