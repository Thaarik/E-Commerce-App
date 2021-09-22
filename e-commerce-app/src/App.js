import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx"
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
        <Navbar />
      </Container>
    </>
  );
}

export default App;
