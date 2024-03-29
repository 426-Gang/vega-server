import bodyParser from 'body-parser';
import express from 'express';
import {login} from '../services/LoginRequestAPI.js';

function registerModule(req, res) {
	if (req.method == 'POST') {
    	const userInfo = req.body;
    	console.log(userInfo);
    	login(`http://${process.env.API_URL}/venus/register`, userInfo)
    		.then(response => {
    			console.log("Response", response);
    			res.send(response);
    		})
    		.catch(error => {
    			console.log("ERROR:", error);
    			res.send(error);
    		})
    }
}

export default registerModule;
