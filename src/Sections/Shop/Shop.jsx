import React from "react";
import "./Shop.css";
import Spacestation from "../../pics/spacestation.jpg";
const Shop = () => {
  return (
    <div className="app_shop" id="shop">
      <img src={Spacestation} alt="spacestation" />
      <div className="app_shop_container">
        <span className="app_shop_title">Shop at Celestial</span>
        <span className="app_shop_text">
          Immortalize you journey with Celestial with a memento from our shop
        </span>
        <button className="app_shop_container_button"> Shop Now</button>
      </div>
    </div>
  );
};

export default Shop;
