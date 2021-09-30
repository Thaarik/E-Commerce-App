import React from "react";
import styled from "styled-components";

const Product = styled.div`
  max-width: 270px;
  max-height: 349px;
  width:100%;
  border: 3px solid #f6f7f8;
  border-radius: 4px;
  margin: 15px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px lightgrey;
  }
`;

const Hot = styled.div`
  width: 40px;
  height: 20px;
  background-color: #ff4858;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 10px;
`;

const AddCart = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;

const ProductImage = styled.div`
  max-width: 236px;
  height: 153px;
  padding: 24px 17px 0 17px;
  position: relative;
  display: flex;
  &:hover ${AddCart} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const ProductTitle = styled.p`
  padding-top: 48px;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
const Rating = styled.div`
  width: 75px;
  height: 10px;
  padding-top: 30px;
`;
const DiscountPrice = styled.p`
  padding-bottom: 30px;
  text-align: center;
  color: #ff4858;
  font-size: 16px;
  font-weight: 600;
`;
const OriginalPrice = styled.span`
  color: #c1c8ce;
  padding-left: 11px;
  text-decoration: line-through #5d656b;
`;
const Fav = styled.img`
  margin: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.1s ease-in;
  }
`;

const Cart = styled.img`
  margin: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.1s ease-in;
  }
`;

function Products({ details, features }) {
  return (
    <>
      <Product key={details.id}>
        {details.bestSeller && <Hot>HOT</Hot>}
        <ProductImage>
          <Image src={details.img} alt="#" />
          <AddCart>
            <Fav src={features[0].img} alt="#" />
            <Cart src={features[1].img} alt="#" />
          </AddCart>
        </ProductImage>
        <ProductTitle>{details.productName}</ProductTitle>
        <Rating></Rating>
        <DiscountPrice>
          ${details.discountPrice}
          <OriginalPrice>${details.originalPrice}</OriginalPrice>
        </DiscountPrice>
      </Product>
    </>
  );
}

export default Products;
