import React from 'react';
import CatalogItem from '../catalog-item/catalog-item.component';
import './catalog.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCatalogSections } from '../../redux/catalog/catalog.selector';

const Catalog = ({ sections }) => 
      (
            <div className='directory-menu'>
                {  sections.map(({title, imageUrl, id, size, linkUrl }) => (
                  <CatalogItem title = {title } key = {id} imageUrl = { imageUrl} size = {size} linkUrl = {linkUrl} />
                  ))
                }
            </div>
        )
    
      const mapStateToProps = createStructuredSelector({
        sections: selectCatalogSections
      }) 
    export default connect(mapStateToProps)(Catalog);