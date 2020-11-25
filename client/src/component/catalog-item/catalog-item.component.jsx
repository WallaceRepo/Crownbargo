import React from 'react';
import './catalog-item.style.scss';
import { withRouter } from 'react-router-dom';

const CatalogItem = ({title, imageUrl, size, history, linkUrl, match }) => (
  <div className = {`${size} catalog-item`} 
        
      onClick = {()=>history.push(`${match.url}${linkUrl}`)}>
          
     <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}  />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
  </div>
);
export default withRouter(CatalogItem );