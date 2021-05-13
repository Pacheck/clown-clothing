import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/selectors/shop";

import CollectionPreview from "../CollectionPreview";

import "./index.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
