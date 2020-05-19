const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: 'jacob',
    database: 'ootp',
    host: 'localhost',
    post: 3306
})

let ootpDB = {};

ootpDB.players = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM players', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

ootpDB.player = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM players WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

ootpDB.games = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM games', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = ootpDB;