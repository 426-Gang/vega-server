import bodyParser from 'body-parser';
import express from 'express';
import {fetchsecrets, newsecret,updatesecret,deletesecret} from '../services/VaultAPI.js';

let router = express();


router.post("/newsecret", (req,res) => {
	const {username} = req.query;
	const {data} = req.query;
	const {shared} = req.query;
	const {name} = req.query;
    console.log("New secret")
    newsecret(`http://${process.env.API_URL}/venus/vault/newsecret?username=${username}&data=${data}&shared=${shared}&name=${name}`, req.headers)
    		.then(response => {
    			console.log("Response", response);
    			res.send(response);
    		})
    		.catch(error => {
    			console.log("ERROR:", error);
    			res.send(error);
    		})
})

router.post("/mysecrets", (req, res) => {
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

router.post("/updatesecret", (req, res) => {
	const {id} = req.query;
	const {username} = req.query;
	const {data} = req.query;
	const {shared} = req.query;
	const {name} = req.query;
	console.log("Update secrets for a user");
    updatesecret(`http://${process.env.API_URL}/venus/vault/updatesecret?id=${id}&username=${username}&data=${data}&shared=${shared}&name=${name}`, req.headers)
	.then(response => {
    	console.log("Response", response);
    	res.send(response);
    })
    .catch(error => {
    	console.log("ERROR:", error);
    	res.send(error);
    })
})

router.post("/deletesecret", (req, res) => {
	const {id} = req.query;
	console.log("Delete a secret for a user");
    deletesecret(`http://${process.env.API_URL}/venus/vault/deletesecret?id=${id}`, req.headers)
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
