import { ICart, CartTypeActions } from './../../types/cart';

export const addToCart = (cart: ICart) => ({
	type: CartTypeActions.ADD_TO_CART,
	payload: cart,
});

export const removeToCart = (id: number) => ({
	type: CartTypeActions.REMOVE_TO_CART,
	payload: id,
});

export const visibleToCart = {
	type: CartTypeActions.VISIBLE_TO_CART,
};
