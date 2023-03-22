import { RootState } from './../rootReducer';

export const selectAllCart = (state: RootState) => state.cart;

export const selectCart = (state: RootState, id: number) => {
	for (const item of state.cart) if (item.id === id) return item;
	return {};
};
