import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import '../App.css';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [featured, setFeatured] = useState([]);
  const [daily, setDaily] = useState([]);
  const [specialFeatured, setSpecialFeatured] = useState([]);
  const [vbuckIconUrl, setVbuckIconUrl] = useState("");

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/shop/br");
    const items = await data.json();
    
    setFeatured(items.data.featured.entries);
    setDaily(items.data.daily.entries);
    setSpecialFeatured(items.data.specialFeatured.entries);
    setVbuckIconUrl(items.data.vbuckIcon);
  }
  
  return (
    <Wrapper>
      <Title>Featured</Title>
      <Items>
        {featured.map(item => (
        <Item key={item.offerId}>
          <strong>{item.devName}</strong>
          <Link to={`/shop/${item.offerId}`} 
            state={{ 
              finalPrice: item.finalPrice,
              image: item.newDisplayAsset.materialInstances[0].images.Background,
              name: item.devName,
              vbuckIconUrl: vbuckIconUrl,
            }}
            >
              <img width="100%" src={item.newDisplayAsset.materialInstances[0].images.Background} alt=""/>
            </Link>
            <Price>
              <img width="25px" src={vbuckIconUrl} alt="" t></img>
              {item.finalPrice}
            </Price>
            <Button>Add to cart</Button>
        </Item>
      ))}
      </Items>
      <Title>Daily</Title>
      <Items>
        {daily.map(item => (
        <Item key={item.offerId}>
          <strong>{item.devName}</strong>
          <Link to={`/shop/${item.offerId}`} 
            state={{ 
              finalPrice: item.finalPrice,
              image: item.newDisplayAsset.materialInstances[0].images.Background,
              name: item.devName,
              vbuckIconUrl: vbuckIconUrl,
            }}
            >
              <img width="100%" src={item.newDisplayAsset.materialInstances[0].images.Background} alt=""/>
            </Link>
            <Price>
              <img width="25px" src={vbuckIconUrl} alt="" t></img>
              {item.finalPrice}
            </Price>
            <Button>Add to cart</Button>
        </Item>
      ))}
      </Items>
      <Title>Special Featured</Title>
      <Items>
        {specialFeatured.map(item => (
        <Item key={item.offerId}>
          <strong>{item.devName}</strong>
          <Link to={`/shop/${item.offerId}`} 
            state={{ 
              finalPrice: item.finalPrice,
              image: item.newDisplayAsset.materialInstances[0].images.Background,
              name: item.devName,
              vbuckIconUrl: vbuckIconUrl,
            }}
            >
              <img width="100%" src={item.newDisplayAsset.materialInstances[0].images.Background} alt=""/>
            </Link>
            <Price>
              <img width="25px" src={vbuckIconUrl} alt="" t></img>
              {item.finalPrice}
            </Price>
            <Button>Add to cart</Button>
        </Item>
      ))}
      </Items>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  color: #A970FF;
  font-size: 2.5rem;
  text-align: center;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4px;
`;

const Item = styled.div`
  color: wheat;
  background-color: hsla(240, 6%, 10%, 0.33);
  border-radius: 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Items = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media (min-width: 50em) {
    grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  }
`;
  
const Button = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  height: 30px;
  color: white;  
  background-color: #18181B;
  border: 1px solid white;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    color: wheat;  
    background-color: #18181B;
    border: 1px solid wheat;
  }
`;

export default Shop;