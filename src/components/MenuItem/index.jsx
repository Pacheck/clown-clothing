import React from "react";

import "./index.scss";
const MenuItem = ({ title, imageUrl, size }) => {
  console.log(imageUrl);
  return (
    <div className={size ? size + ` menu-item` : `menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
