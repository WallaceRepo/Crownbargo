import React from 'react';
import CatalogItem from '../catalog-item/catalog-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCatalogSections } from '../../redux/catalog/catalog.selector';
import { DirectoryMenuContainer } from './catalog.styles';

const Catalog = ({ sections }) => 
      (
        <DirectoryMenuContainer>
                {  sections.map(({title, imageUrl, id, size, linkUrl }) => (
                  <CatalogItem title = {title } key = {id} imageUrl = { imageUrl} size = {size} linkUrl = {linkUrl} />
                  ))
                }
        </DirectoryMenuContainer>
        )
    
      const mapStateToProps = createStructuredSelector({
        sections: selectCatalogSections
      }) 
    export default connect(mapStateToProps)(Catalog);