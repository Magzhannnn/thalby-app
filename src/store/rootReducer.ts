import { cartReducer } from './cart/cart-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
