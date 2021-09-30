import React from 'react'
import styled from 'styled-components'
import Header from './../Components/Navbar/Navbar'
import ProductPageOptions from '../Components/ProductPageOptions/ProductPageOptions';
const ProductContainer = styled.div``;
function ProductPage() {
    return (
        <>
            <Header />
            <ProductContainer>
                <ProductPageOptions/>
            </ProductContainer>
        </>
    )
}

export default ProductPage
