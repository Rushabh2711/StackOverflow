const express = require('express');
const userService = require('../services/userService');
const router = new express.Router();

// router.post('/findShop', async (req, res) => {
//     try {
//         const shop = await userService.findShop(req.body.user_id);
//         res.status(200).send(shop);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

module.exports = router;