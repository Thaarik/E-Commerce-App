import React from "react";
import styled from "styled-components";
import logo from "./../../Images/Web/iSHOP Logo.svg"
const ImgContainer = styled.div`
  height: 60px;
  width: 126px;
  margin:52px auto 30px auto;
`;

function Header() {
  return (
    <div>
      <ImgContainer>
          <img src={logo} alt="Logo"/> 
      </ImgContainer>
    </div>
  );
}

export default Header;
