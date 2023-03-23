import { RootState } from './../rootReducer';

export const selectAllCart = (state: RootState) => state.cart.cart;

export const selectCartVisible = (state: RootState) => state.cart.visible;

export const selectCart = (state: RootState, id: number) => {
	for (const item of state.cart.cart) if (item.id === id) return item;
	return {};
};
