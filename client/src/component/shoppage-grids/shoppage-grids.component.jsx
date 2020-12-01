import React from 'react';
import {connect } from 'react-redux';
import ShopCollection from '../shop-collection/shop-collection.component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForShoppageGrid } from '../../redux/shopdata/shopdata.selector';
import { CollectionsOverviewContainer } from './shoppage-grids.styles';

const ShoppageGrid = ({ collections}) => (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
          <ShopCollection key={id} {...otherCollectionProps} />
        ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForShoppageGrid
});

export default connect(mapStateToProps)(ShoppageGrid);