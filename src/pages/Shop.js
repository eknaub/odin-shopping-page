import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [featured, setFeatured] = useState([]);
  const [daily, setDaily] = useState([]);
  const [specialFeatured, setSpecialFeatured] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v2/shop/br");
    const items = await data.json();
    
    setFeatured(items.data.featured.entries);
    setDaily(items.data.daily.entries);
    setSpecialFeatured(items.data.specialFeatured.entries);
  }
  
  return (
    <Wrapper>
      <FeaturedContainer>
        {featured.map(item => (
        <h1 key={item.offerId}>
        <Link to={`/shop/${item.offerId}`} 
          state={{ 
            finalPrice: item.finalPrice,
            image: item.newDisplayAsset.materialInstances[0].images.Background,
            name: item.devName
        }}
        >
          <img width="100%" src={item.newDisplayAsset.materialInstances[0].images.Background} alt=""/>
        </Link>
        </h1>
      ))}
      </FeaturedContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 16px;
`;

const FeaturedContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media (min-width: 50em) {
    grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));
  }
`;

export default Shop;