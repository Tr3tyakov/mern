import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './productReducer';
import { categoryReducer } from './categoryReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  productsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
