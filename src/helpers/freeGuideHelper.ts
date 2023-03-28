import { IPersonInfo } from './../types/freeGuide';

export interface MyObject {
	[key: string]: string;
}

export interface IEmptyInput {
	[key: string]: boolean;
}

export const emptyFormFreeGuide = (personInfo: MyObject) => {
	const emptyInput: IEmptyInput = {};
	for (let key in personInfo) {
		if (typeof personInfo[key] === 'string' && personInfo[key].trim() === '') {
			emptyInput[key] = true;
		}
	}
	return emptyInput;
};

export const isObject = (obj: IEmptyInput) => {
	for (let key in obj) if (obj[key]) return true;
	return false;
};
