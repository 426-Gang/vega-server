import bodyParser from 'body-parser';
import express from 'express';
import {fetchsecrets, newsecret} from '../services/VaultAPI.js';

let router = express();


router.post("/newentry", (req,res) => {
	const {username} = req.query;
	const {data} = req.query;
	const {shared} = req.query;
    console.log("New secret")
    newsecret(`http://${process.env.API_URL}/venus/vault/newentry?username=${username}&data=${data}&shared=${shared}`, req.headers)
    		.then(response => {
    			console.log("Response", response);
    			res.send(response);
    		})
    		.catch(error => {
    			console.log("ERROR:", error);
    			res.send(error);
    		})
})

router.get("/mysecrets", (req, res) => {
	const {username} = req.query;
	console.log("Entered secrets for a user");
	fetchsecrets(`http://${process.env.API_URL}/venus/vault/mysecrets?username=${username}`, req.headers)
	.then(response => {
    	console.log("Response", response);
    	res.send(response);
    })
    .catch(error => {
    	console.log("ERROR:", error);
    	res.send(error);
    })
})


export default router;
