import React from 'react';
import './shop-collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const ShopCollection = ({ title, items }) => (
    <div className='shop-collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item = {item } />
          ))}
      </div>
    </div>
  );
  
  export default ShopCollection;