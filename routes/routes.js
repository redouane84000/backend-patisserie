const express = require('express');
const router = express.Router();
const { devisController } = require('../controllers/controller');
const db = require('../config/db');

router.post('/', devisController);

router.get('/', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, result) => {
        if (err) {
            console.log('ERREUR SQL :', err);
            res.status(500).json({ error: err.message });
        } 
            res.status(200).json({ message: 'Connexion réussie à la base de données' });
    });
});

module.exports = router;