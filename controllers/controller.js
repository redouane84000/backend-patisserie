const {postDevis} = require('../models/model');


const devisController = (req, res) => {
    const { nom, email, telephone, categorie_gateau, nombre_parts,Message } = req.body;
    postDevis(nom, email, telephone, categorie_gateau, nombre_parts,Message, (err, result) => {
        if(err) {
            res.status(500).json({ message: 'Erreur lors de la création du devis' });
        } else {
            res.status(200).json({ message: 'Devis créé avec succès' });
        }

    });

}

module.exports = { devisController };
