import React, { useState } from "react";
import styled from "styled-components";
import { products,features } from "../../Api/ApiData.js";

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

const Product = styled.div`
  max-width: 270px;
  max-height: 349px;
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
    opacity:0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:rgb(255,255,255,0.8);
    width: 100%;
    height: 100%;
    transition:all 0.5s ease;
`;


const ProductImage = styled.div`
  max-width: 236px;
  height: 153px;
  padding: 24px 17px 0 17px;
  position: relative;
  &:hover ${AddCart}{
    opacity:1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
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



const Fav = styled.img`
margin:5px;
cursor:pointer;
&:hover{
  transform:scale(1.2);
  transition:all 0.1s ease-in;
  
}`;

const Cart = styled.img`
margin:5px;
cursor:pointer;
&:hover{
  transform:scale(1.2);
  transition:all 0.1s ease-in;
}`;

function BestSeller() {
  let filteredProducts = products;
  const [display, setDisplay] = useState(filteredProducts);
  const CategoryFilter = (category) => {
    filteredProducts = products.filter((product) => {
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
            <Product key={product.id}>
              <Hot>HOT</Hot>
              <ProductImage>
                <Image src={product.img} alt="#" />
                <AddCart>
                  <Fav src={features[0].img} alt="#" />
                  <Cart src={features[1].img} alt="#" />
                </AddCart>
              </ProductImage>
              <ProductTitle>{product.productName}</ProductTitle>
              <Rating></Rating>
              <DiscountPrice>
                ${product.discountPrice}
                <OriginalPrice>${product.originalPrice}</OriginalPrice>
              </DiscountPrice>
            </Product>
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
