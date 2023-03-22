import { ICart, CartActions, CartTypeActions } from './../../types/cart';

const initialState: ICart[] = [];

export const cartReducer = (
	state = initialState,
	action: CartActions
): ICart[] => {
	switch (action.type) {
		case CartTypeActions.ADD_TO_CART: {
			const res = state.filter(c => c.id === action.payload.id);
			if (res.length === 0) return [...state, action.payload];
			return state.map(c =>
				c.id === action.payload.id
					? { ...c, count: c.count + action.payload.count }
					: c
			);
		}
		case CartTypeActions.REMOVE_TO_CART:
			return state.filter(c => c.id !== action.payload);
		default:
			return state;
	}
};
