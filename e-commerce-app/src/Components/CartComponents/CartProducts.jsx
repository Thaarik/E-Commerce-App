import React from 'react'
import styled from 'styled-components';
 
const Container = styled.div`
width:100%;
height:500px;
`;

const Top = styled.div``;
const Column1 = styled.div``;
const Column2 = styled.div``;
const Column3 = styled.div``;
const Column4 = styled.div``;
const Title = styled.p``;

function CartProducts() {
    return (
        <>
            <Container>
            <Top>
                <Column1><Title>Product</Title></Column1>
                <Column2><Title>Product</Title></Column2>
                <Column3><Title>Product</Title></Column3>
                <Column4><Title>Product</Title></Column4>
            </Top>

            </Container>
        </>
    )
}

export default CartProducts
