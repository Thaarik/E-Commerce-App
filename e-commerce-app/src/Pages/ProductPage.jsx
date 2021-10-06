import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./../Components/Navbar/Navbar";
import Ad from "./../Components/Advertisement/Advertisement";
import { Pagination } from "@mui/material";
import { products } from "./../Api/ApiData.js";
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
  background-color: aquamarine;
  margin: 15px 0;
`;
const Prices = styled.div`
  max-width: 270px;
  min-height: 144px;
  background-color: aquamarine;
  margin: 15px 0;
`;
const Color = styled.div`
  max-width: 270px;
  min-height: 144px;
  background-color: aquamarine;
  margin: 15px 0;
`;
const Brand = styled.div`
  max-width: 270px;
  min-height: 245px;
  background-color: aquamarine;
  margin: 15px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 870px;
  height: auto;
  width: 100%;
`;
        
const PaginationWrapper = styled.div`
max-width:870px;
width:100%;
background-color: #FAFAFB;display:flex;
justify-content: center;
`;

function ProductPage() {
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
          <Accessories></Accessories>
          <Prices></Prices>
          <Color></Color>
          <Brand></Brand>
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
