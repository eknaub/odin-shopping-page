import styled from "styled-components";
import RouteSwitch from "./RouteSwitch";

const App = () => {
  return (
    <Wrapper>
      <RouteSwitch/>
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #43494b;
  font-family: Roboto, sans-serif;
`;