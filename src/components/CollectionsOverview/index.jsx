import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/selectors/shop";

import CollectionPreview from "../CollectionPreview";

import { CollectionsContainer } from "./styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
