const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PAYEMENT = require('../utils/payements.repository');

ROUTER.get('/get/sender/:client_id', getPayementsBySenderIdRoute);
ROUTER.get('/get/receiver/:client_id', getPayementsByReceiverIdRoute);
ROUTER.get('/get/:payement_id', getPayementRoute);

ROUTER.post('/send/', sendPayementRoute);

async function getPayementRoute(req, res) {
    let payement_id = req.params.payement_id;

    if(payement_id === "all") {
        let payements = await PAYEMENT.getAllPayements();
        res.status(200).json(payements);
    } else {
        let payement = await PAYEMENT.getPayement(payement_id);
        res.status(200).json(payement);
    }
}

async function getPayementsBySenderIdRoute(req, res) {
    let sender_id = req.params.client_id;
    let payements = await PAYEMENT.getPayementsBySenderId(sender_id);
    res.status(200).json(payements);
}

async function getPayementsByReceiverIdRoute(req, res) {
    let receiver_id = req.params.client_id;
    let payements = await PAYEMENT.getPayementsByReceiverId(receiver_id);
    res.status(200).json(payements);
}

async function sendPayementRoute(req, res) {
    let account_sender_id = req.body.account_sender_id;
    let account_receiver_id = req.body.account_receiver_id;
    let amount = req.body.amount;
    let label = req.body.payement_label;

    let result = await PAYEMENT.sendPayement(account_sender_id, account_receiver_id, amount, label);
    res.status(200).json(result);
}

module.exports = ROUTER;