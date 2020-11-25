import React from 'react';
import {connect } from 'react-redux';
import ShopCollection from '../shop-collection/shop-collection.component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForShoppageGrid } from '../../redux/shopdata/shopdata.selector';
import './shoppage-grids.style.scss';

const ShoppageGrid = ({ collections}) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
          <ShopCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForShoppageGrid
});

export default connect(mapStateToProps)(ShoppageGrid);