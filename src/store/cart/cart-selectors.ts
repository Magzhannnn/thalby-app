import { ICart } from './../../types/cart';
import { RootState } from './../rootReducer';

export const selectAllCart = (state: RootState) => state.cart.cart;

export const selectCartVisible = (state: RootState) => state.cart.visible;

export const selectCart = (state: RootState, id: number) => {
	for (const item of state.cart.cart) if (item.id === id) return item;
	return {};
};

export const selectTotalPrice = (state: RootState) =>
	state.cart.cart
		.reduce((acc: number, curr: ICart) => acc + curr.price * curr.count, 0)
		.toFixed(2);

export const selectAllCartInfo = (state: RootState) => state.cart;
