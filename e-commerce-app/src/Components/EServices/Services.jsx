import React from "react";
import styled from "styled-components";
import { services } from "./../../Api/ApiData.js";

const Container = styled.div`
  max-width: 1200px;
  height: auto;
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardContainer = styled.div`
  max-width: 330px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #22262a;
`;
const IconImage = styled.img``;
const ServiceTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const ServiceDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

function Services() {
  return (
    <div>
      <Container>
        {services.map((service) => (
          <CardContainer key={service.id}>
            <IconImage src={service.icon} alt="#" />

            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </CardContainer>
        ))}
      </Container>
    </div>
  );
}

export default Services;
