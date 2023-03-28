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
			// return true; // нашли пустую строку
		}
	}
	return emptyInput;
	// return false; // не нашли пустых строк
};

export const isObject = (obj: IEmptyInput) => {
	console.log(obj);
	for (let key in obj) {
		if (obj[key]) {
			console.log(obj[key]);
			return true;
		}
	}
	return false;
};
