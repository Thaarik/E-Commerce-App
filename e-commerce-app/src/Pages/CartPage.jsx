import React from "react";
import styled from "styled-components";
import Navbar from "./../Components/Navbar/Navbar";
import CartProducts from "../Components/CartComponents/CartProducts";
import Footer from "./../Components/Footer/Footer";
const Container = styled.div`
  max-width: 1170px;
  min-height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  color: #22262a;
  font-weight: 600;
`;
const Top = styled.div`
  width: 100%;
  height: 550px;
`;
const Bottom = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
`;

const Voucher = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VoucherInput = styled.div`
  max-width: 395px;
  width: 100%;
  height: auto;
`;

const Input = styled.input`
  max-width: 251px;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid #f1f3f4;
  background-color: #f1f3f4;
`;
const VoucherButton = styled.button`
  max-width: 118px;
  width: 100%;
  height: 60px;
  background: #33a0ff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;

const Checkout = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckoutDetails = styled.div`
  max-width: 370px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
const Total = styled.p`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
`;
const Price = styled.p`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
`;
const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
const Fee = styled.p`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
`;
const Coupon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
const CouponText = styled.p`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
`;
const CouponChoice = styled.p`
  font-size: 16px;
  color: #262626;
  font-weight: 600;
`;
const TotalAmount = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid #f6f7f8;
`;
const TotalText = styled.p`
  color: #22262a;
  font-size: 30px;
  font-weight: 600;
`;
const TotalPrice = styled.p`
  color: #22262a;
  font-size: 30px;
  font-weight: 600;
`;
const CheckoutButton = styled.button`
  width: 100%;
  height: 60px;
  background: #33a0ff 0% 0% no-repeat padding-box;
  border: 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
`;

function CartPage() {
  return (
    <>
      <Navbar />
      <Bar>
        <BarTitle>Cart</BarTitle>
      </Bar>
      <Container>
        <Top>
          <CartProducts />
        </Top>
        <Bottom>
          <Voucher>
            <VoucherInput>
              <Input type="text" placeholder="Voucher code" />
              <VoucherButton>Redeem</VoucherButton>
            </VoucherInput>
          </Voucher>
          <Checkout>
            <CheckoutDetails>
              <Details>
                <Subtotal>
                  <Total>Subtotal</Total>
                  <Price>$998</Price>
                </Subtotal>
                <Shipping>
                  <Fee>Shipping fee</Fee>
                  <Price>$20</Price>
                </Shipping>
                <Coupon>
                  <CouponText>Coupon</CouponText>
                  <CouponChoice>No</CouponChoice>
                </Coupon>
              </Details>
              <TotalAmount>
                <TotalText>TOTAL</TotalText>
                <TotalPrice>$1018</TotalPrice>
              </TotalAmount>
              <CheckoutButton>Check out</CheckoutButton>
            </CheckoutDetails>
          </Checkout>
        </Bottom>
      </Container>
      <Footer />
    </>
  );
}

export default CartPage;
