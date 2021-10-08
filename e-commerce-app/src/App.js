import "./App.css";
// import Home from "./Pages/Home.jsx"
// import ProductPage from "./Pages/ProductPage.jsx"
import CartPage from "./Pages/CartPage";
import styled from "styled-components";


const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  height: auto;
`;

function App() {
  return (
    <>
      <Container>
        {/* <Home /> */}
        {/* <ProductPage/> */}
        <CartPage/>
      </Container>
    </>
  );
}

export default App;
