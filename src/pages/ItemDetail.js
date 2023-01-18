import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";

function ItemDetail() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const data = useLocation();

  const fetchItem = async () => {
    setItem(data.state);
  }
  
  return (
    <Wrapper>
      <Item>
        <img width="33%" src={item.image} alt=""/>
        <Information>
          <div>
            <h1>{item.name}</h1>
            <div>
            <strong>Bundle Information:</strong> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>
          </div>
          <Price><strong>Price:</strong> <img width="25px" src={item.vbuckIconUrl} alt=""/>{item.finalPrice}</Price>
          <div className="buttons-wrapper">
            <Button>Add to cart</Button>
            <Link to="/shop"><Button>Go back</Button></Link>
          </div>
        </Information>
      </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin-top: 8px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  .buttons-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Item = styled.div`
  color: wheat;
  background-color: hsla(240, 6%, 10%, 0.33);
  border-radius: 16px;
  padding: 8px;
  display: flex;
  height: 100%;
  flex-grow: 0;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Button = styled.button`
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
    color: wheat;  
    background-color: #18181B;
    border: 1px solid wheat;
    letter-spacing: 3px;
  }
`;

export default ItemDetail;