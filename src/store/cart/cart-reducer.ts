import { ICart, CartActions, CartTypeActions } from './../../types/cart';

interface InitialStateProps {
	cart: ICart[];
	visible: boolean;
}

const initialState: InitialStateProps = {
	cart: [],
	visible: false,
};

export const cartReducer = (
	state = initialState,
	action: CartActions
): InitialStateProps => {
	switch (action.type) {
		case CartTypeActions.ADD_TO_CART: {
			const res = state.cart.filter(c => c.id === action.payload.id);
			if (res.length === 0)
				return { ...state, cart: [...state.cart, action.payload] };
			return {
				...state,
				cart: state.cart.map(c =>
					c.id === action.payload.id
						? { ...c, count: c.count + action.payload.count }
						: c
				),
			};
		}
		case CartTypeActions.REMOVE_TO_CART:
			return {
				...state,
				cart: state.cart.filter(c => c.id !== action.payload),
			};
		case CartTypeActions.VISIBLE_TO_CART:
			return {
				...state,
				visible: !state.visible,
			};
		default:
			return state;
	}
};
