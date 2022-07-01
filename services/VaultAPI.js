import {doPost, doGet} from './HTTPRequestAPI.js';

export function fetchsecrets(url, headers){
	console.log(headers);
	return doPost(url, headers['authorization'])
}t

export function newsecret(url, headers){
	console.log(headers);
	return doPost(url, headers['authorization'])
}
