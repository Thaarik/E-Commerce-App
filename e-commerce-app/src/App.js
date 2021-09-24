import "./App.css";
import Home from "./Pages/Home.jsx"
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  border: 1px solid black;
  height: auto;
`;

function App() {
  return (
    <>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
