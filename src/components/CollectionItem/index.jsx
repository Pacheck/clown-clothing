import React from "react";

import { connect } from "react-redux";

import CustomButton from "../CustomButton";
import { addItem } from "../../redux/actions/cart.actions";

import {
  CollectionItemContainer,
  CollectionImage,
  CollectionFooter,
  FooterInfo,
} from "./styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionImage imageUrl={imageUrl} />
      <CollectionFooter>
        <FooterInfo>{name}</FooterInfo>
        <FooterInfo price>${price}</FooterInfo>
      </CollectionFooter>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
