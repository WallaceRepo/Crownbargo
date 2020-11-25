import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import catalogReducer from './catalog/catalog.reducer'
import shopdataReducer from './shopdata/shopdata.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  catalog: catalogReducer,
  shopdata: shopdataReducer
});

export default persistReducer(persistConfig, rootReducer);
