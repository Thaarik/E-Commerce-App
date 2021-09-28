import React from "react";
import styled from "styled-components";
import icon from "./../../Images/Web/iSHOP Logo.svg";
import fb from "./../../Images/Web/facebook.svg";
import tweet from "./../../Images/Web/twitter.svg";
import wu from "./../../Images/Web/Western_union.svg";
import mc from "./../../Images/Web/master_card.svg";
import ppl from "./../../Images/Web/Paypal.svg";
import visa from "./../../Images/Web/visa.svg";
const Container = styled.div`
  width: 100%;
  min-height: 510px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const RowContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #22262a;
  height: 500px;
`;
const RowA = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #f6f7f8;
`;
const RowB = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f6f7f8;
`;
const RowC = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  width: 225px;
`;
const ColumnAA = styled.div`
  padding: 20px;
  font-weight: 600;
  font-size: 12px;
  max-width: 270px;
`;
const ColumnAB = styled.div`
  padding: 20px;
  font-weight: 600;
  font-size: 12px;
  max-width: 270px;
`;
const ColumnAC = styled.div`
  padding: 20px;
  font-weight: 600;
  font-size: 12px;
  max-width: 270px;
`;
const ColumnBA = styled.div`
  padding: 10px;
`;
const ColumnBB = styled.div`
  padding: 10px;
`;
const ColumnBC = styled.div`
  padding: 10px;
`;
const ColumnBD = styled.div`
  padding: 10px;
`;
const ColumnBE = styled.div`
  padding: 10px;
`;
const ColumnBF = styled.div`
  padding: 10px;
`;
const CardA = styled.img``;
const CardB = styled.img``;
const CardC = styled.img``;
const CardD = styled.img``;
const ContentA = styled.div``;
const Icon = styled.img`
  width: 108px;
  height: 51px;
  filter: grayscale(100%);
  opacity: 0.5;
  cursor: pointer;
  margin-bottom: 16px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding-bottom: 25px;
`;
const List = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  font-weight: 600;
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
`;
const SocialMedia = styled.div`
  padding-top: 10px;
`;
const Fb = styled.img`
  width: 10px;
  height: auto;
`;
const Tweet = styled.img`
  margin-left: 40px;
  width: 20px;
  height: auto;
`;

function Footer() {
  return (
    <>
      <Container>
        <RowContainer>
          <RowA>
            <ColumnAA>
              <Icon src={icon} alt="#" />
              <ContentA>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </ContentA>
            </ColumnAA>
            <ColumnAB>
              <Title>Follow Us</Title>
              <ContentA>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </ContentA>
              <SocialMedia>
                <Fb src={fb} alt="#" />
                <Tweet src={tweet} alt="#" />
              </SocialMedia>
            </ColumnAB>
            <ColumnAC>
              <Title>Contact Us</Title>
              <ContentA>
                iShop: address @building 124
                <br />
                Call us now: 0123-456-789
                <br />
                Email: support@whatever.com
              </ContentA>
            </ColumnAC>
          </RowA>

          <RowB>
            <ColumnBA>
              <Title>Infomation</Title>
              <List>
                <Li>About Us</Li>
                <Li>Information</Li>
                <Li>Privacy Policy</Li>
                <Li>Terms & Conditions</Li>
              </List>
            </ColumnBA>
            <ColumnBB>
              <Title>Service</Title>
              <List>
                <Li>About Us</Li>
                <Li>Information</Li>
                <Li>Privacy Policy</Li>
                <Li>Terms & Conditions</Li>
              </List>
            </ColumnBB>
            <ColumnBC>
              <Title>Extras</Title>
              <List>
                <Li>About Us</Li>
                <Li>Information</Li>
                <Li>Privacy Policy</Li>
                <Li>Terms & Conditions</Li>
              </List>
            </ColumnBC>
            <ColumnBD>
              <Title>My Account</Title>
              <List>
                <Li>About Us</Li>
                <Li>Information</Li>
                <Li>Privacy Policy</Li>
                <Li>Terms & Conditions</Li>
              </List>
            </ColumnBD>
            <ColumnBE>
              <Title>Userful Links</Title>
              <List>
                <Li>About Us</Li>
                <Li>Information</Li>
                <Li>Privacy Policy</Li>
                <Li>Terms & Conditions</Li>
              </List>
            </ColumnBE>
            <ColumnBF>
              <Title>Our Offers</Title>
              <List>
                <Li>About Us</Li>
                <Li>Information</Li>
                <Li>Privacy Policy</Li>
                <Li>Terms & Conditions</Li>
              </List>
            </ColumnBF>
          </RowB>
          <RowC>
            <CardA src={wu} alt="#" />
            <CardB src={mc} alt="#" />
            <CardC src={ppl} alt="#" />
            <CardD src={visa} alt="#" />
          </RowC>
        </RowContainer>
      </Container>
    </>
  );
}

export default Footer;
