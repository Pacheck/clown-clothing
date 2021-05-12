import React from "react";

import { connect } from "react-redux";

import CollectionItem from "../../components/CollectionItem";

import { selectCollection } from "../../redux/selectors/shop";

import "./index.scss";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
