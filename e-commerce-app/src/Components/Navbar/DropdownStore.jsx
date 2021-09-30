import React from "react";
import styled from "styled-components";
import { dropdown } from "./../../Api/ApiData.js";
const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
`;
const Title = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #c1c8ce;
`;

const Accessories = styled.div`
  /* max-width:314px;
width:100%;
height:247px;
padding:40px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Category = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const AccessoriesContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const CategoryContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const Product = styled.div`
  color: #262626;
  font-weight: 600;
  padding: 10px 0;
  margin: 5px 0;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    color: #2e90e5;
  }
`;
function DropdownStore() {
  return (
    <>
      <Container>
        <Accessories>
          <Title>Accessories</Title>
          <AccessoriesContainer>
            {dropdown.map(
              (dp) =>
                dp.type === "accessories" && (
                  <Product key={dp.id}>{dp.product}</Product>
                )
            )}
          </AccessoriesContainer>
        </Accessories>
        <Category>
        <Title>Category</Title>
          <CategoryContainer>
           
            {dropdown.map(
            (dp) =>
              dp.type === "category" && (
                <Product key={dp.id}>{dp.product}</Product>
              )
          )}
          </CategoryContainer>
        </Category>
      </Container>
    </>
  );
}

export default DropdownStore;
