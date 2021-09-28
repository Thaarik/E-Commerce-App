import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

import { products } from "./../../Api/ApiData.js";

const Title = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: 800;
  margin-top: 125px;
  margin-bottom: 30px;
`;
const Container = styled.div`
  max-width: 1266px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  max-width: 320px;
  min-height: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin:15px;
  padding: 10px;
  &:hover {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: -4px 18px 30px #0000001a;
    border: 0.10000000149011612px solid #000000;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  padding: 5px;
`;
const ProductDescription = styled.div`
  width: 135px;
  margin: 0 auto;
  color: #262626;
  padding: 10px;
`;
const ProductTitle = styled.p`
  font-style: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Rating = styled.div``;
const DiscountPrice = styled.p`
  padding-bottom: 30px;
  text-align: left;
  color: #ff4858;
  font-size: 16px;
  font-weight: 600;
`;
const OriginalPrice = styled.span`
  color: #c1c8ce;
  padding-left: 11px;
  text-decoration: line-through #5d656b;
`;

function Featured() {
  let featured = [];
  products.filter((product) => {
    if (product.featured) {
      featured.push(product);
    }
    return featured;
  });

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <Title>FEATURED PRODUCTS</Title>
      <Container>
        <Carousel breakPoints={breakpoints} >
          {featured.map((product) =>
            product.featured ? (
              <Card key={product.id}>
                <Img src={product.img} alt="#" />
                <ProductDescription>
                  <ProductTitle>{product.productName}</ProductTitle>
                  <Rating></Rating>
                  <DiscountPrice>
                    ${product.discountPrice}
                    <OriginalPrice>${product.originalPrice}</OriginalPrice>
                  </DiscountPrice>
                </ProductDescription>
              </Card>
            ) : (
              ""
            )
          )}
        </Carousel>
      </Container>
    </>
  );
}

export default Featured;
