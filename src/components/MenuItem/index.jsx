import React from "react";

import { withRouter } from "react-router-dom";

import { MenuItemContainer, BackgroundImage, Content, Text } from "./styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      className={size ? size : ""}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Content>
        <Text as="h1" className="title">
          {title.toUpperCase()}
        </Text>
        <Text className="subtitle">SHOP NOW</Text>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
