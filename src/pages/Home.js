import styled from 'styled-components';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <div>
        <Title>Welcome</Title>
        <Description>
          A Fortnite Battle Royale shop using an API found <ApiLink href="https://dash.fortnite-api.com">here</ApiLink>
        </Description>
      </div>
      <Link to="/shop"><Explore>Explore</Explore></Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 25vh;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

const ApiLink = styled.a`
  color: #A970FF;
  text-decoration: none;
  font-size: 1.25rem;
`;

const Description = styled.div`
  color: white;
  font-size: 1.25rem;
`;

const Explore = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  height: 50px;
  width: 125px;
  color: white;  
  background-color: #18181B;
  border: 1px solid white;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    color: #A970FF;  
    background-color: #18181B;
    border: 1px solid #A970FF;
    letter-spacing: 3px;
  }
`;

export default Home;
