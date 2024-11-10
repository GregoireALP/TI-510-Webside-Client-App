const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PAYEMENT = require('../utils/payements.repository');

ROUTER.get('/list', listPayementRoute);
ROUTER.get('/get/sender/:client_id', getPayementsBySenderIdRoute);
ROUTER.get('/get/receiver/:client_id', getPayementsByReceiverIdRoute);

async function listPayementRoute(req, res) {
    let payements = await PAYEMENT.getAllPayementsController();
    res.status(200).json(payements);
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

module.exports = ROUTER;