export interface ICart {
	id: number;
	image: string;
	title: string;
	price: number;
	count: number;
}

export enum CartTypeActions {
	ADD_TO_CART = 'ADD_TO_CART',
	REMOVE_TO_CART = 'REMOVE_TO_CART',
}

interface addToCart {
	type: CartTypeActions.ADD_TO_CART;
	payload: ICart;
}

interface removeToCart {
	type: CartTypeActions.REMOVE_TO_CART;
	payload: number;
}

export type CartActions = addToCart | removeToCart;
