import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productReducer } from './productReducer';
import { categoryReducer } from './categoryReducer';
import { authReducer } from './authReducer';
import { headerReducer } from './headerReducer';
import { orderReducer } from './orderReducer';
const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  productReducer,
  headerReducer,
  orderReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
