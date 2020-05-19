const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/players', async (req, res, next) => {
    try {
        let results = await db.players();
        res.json(results);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.get('/players/:id', async (req, res, next) => {
    try {
        let results = await db.players(req.params.id);
        res.json(results);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.get('/games', async (req, res, next) => {
    try {
        let results = await db.games();
        res.json(results);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

module.exports = router;