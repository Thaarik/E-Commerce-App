import React from "react";
import styled from "styled-components";
import Navbar from "./../Components/Navbar/Navbar";
import CartProducts from "../Components/CartComponents/CartProducts";
import Footer from "./../Components/Footer/Footer";
const Container = styled.div`
  max-width: 1170px;
  min-height: 700px;
  margin: 0 auto;
  background-color: aquamarine;
`;
const Bar = styled.div`
  width: 100%;
  height: 51px;
  background-color: #f6f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BarTitle = styled.p`
font-size: 14px;
color:#22262A;
font-weight: 600;
`;
function CartPage() {
  return (
    <>
      <Navbar />
      <Bar>
        <BarTitle>Cart</BarTitle>
      </Bar>
      <Container>
        <CartProducts />
      </Container>
      <Footer />
    </>
  );
}

export default CartPage;
