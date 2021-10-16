import React from "react";
import styled from "styled-components";
import { cartItem } from "../../Api/ApiData";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Container = styled.div`
  width: 100%;
  height: 500px;
`;

const Top = styled.div`
  display: flex;
  padding-top: 31px;
  padding-bottom: 31px;
  border-bottom: 2px solid #f6f7f8;
  /* align-items: center; */
`;
const Column1 = styled.div`
  flex: 3;
`;
const Column2 = styled.div`
  flex: 1;
`;
const Column3 = styled.div`
  flex: 1;
`;
const Column4 = styled.div`
  flex: 1;
`;
const Title = styled.p`
  text-align: center;
  color: #22262a;
  font-size: 18px;
  font-weight: 600;
`;

const Bottom = styled.div`
  height: 422px;
  width: 100%;
  overflow-y: hidden;
  /* background-color: aliceblue; */
`;
const Item = styled.div`
  width: 100%;
  height: 210;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 31px;
  padding-bottom: 31px;
  border-bottom: 2px solid #f6f7f8;
`;
const Delete = styled.div`
  flex: 0.2;
`;
const ItemImage = styled.div`
  flex: 0.6;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const ItemTitle = styled.p`
  flex: 2.2;
`;
const ItemPrice = styled.p`
  text-align: center;
  flex: 1;
`;
const ItemQty = styled.div`
  flex: 1;
  display: flex;
  background-color: #f6f7f8;
  width: 116px;
  height: 46px;
  align-items: center;
  justify-content: space-evenly;
`;
const Quantity = styled.div``;
const Add = styled.div`
  color: #33a0ff;
`;
const Remove = styled.div`
  color: #33a0ff;
`;
const ItemUnitPrice = styled.p`
  text-align: center;
  flex: 1;
`;
function CartProducts() {
  return (
    <>
      <Container>
        <Top>
          <Column1>
            <Title>Product</Title>
          </Column1>
          <Column2>
            <Title>Price</Title>
          </Column2>
          <Column3>
            <Title>Quantity</Title>
          </Column3>
          <Column4>
            <Title>Unit Price</Title>
          </Column4>
        </Top>
        <Bottom>
          {cartItem.map((item) => (
            <Item key={item.id}>
              <Delete>X</Delete>
              <ItemImage>
                <Image src={item.productImage} alt="#" />
              </ItemImage>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemQty>
                <Add>
                  <AddIcon />
                </Add>
                <Quantity>{item.quantity}</Quantity>
                <Remove>
                  <RemoveIcon />
                </Remove>
              </ItemQty>
              <ItemUnitPrice>{item.unitprice}</ItemUnitPrice>
            </Item>
          ))}
        </Bottom>
      </Container>
    </>
  );
}

export default CartProducts;
