import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ItemDetail() {

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  
  const data = useLocation();
  const fetchItem = async () => {
    console.log(data.state);
  }
  
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt=""/>
    </div>
  )
}

export default ItemDetail;