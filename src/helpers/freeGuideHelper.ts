import { IPersonInfo } from './../types/freeGuide';

export interface MyObject {
  [key: string]: string;
}

export const emptyFormFreeGuide = (personInfo: MyObject) => {
	for (let key in personInfo) {
    if (typeof personInfo[key] === 'string' && personInfo[key].trim() === '') {
      return true; // нашли пустую строку
    }
  }
  return false; // не нашли пустых строк
};
