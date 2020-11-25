import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shopdata;

export const selectCollections = memoize(createSelector(
    [selectShop],
    shopdata => shopdata.collections
));

export const selectCollection = collectionUrlParam => 
 createSelector(
     [selectCollections],
     collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectCollectionForShoppageGrid = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key=>collections[key]):[]
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shopdata => shopdata.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shopdata => !!shopdata.collections 
);
