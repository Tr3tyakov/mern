import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productReducer } from './productReducer';
import { categoryReducer } from './categoryReducer';
import { authReducer } from './authReducer';
import { headerReducer } from './headerReducer';

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  productReducer,
  headerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
