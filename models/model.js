const db = require('../config/db');

const postDevis = (nom, email, telephone, categorie_gateau, nombre_parts,Message, callback) => {
    const sql = 'INSERT INTO devis (nom, email, telephone, categorie_gateau, nombre_parts,Message) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nom, email, telephone, categorie_gateau, nombre_parts,Message], (err, result) => {
        if (err){
            console.log(err);
        return callback(err,null);
    }
     console.log(result);
        return callback(null,result);
    });
}

module.exports = {postDevis};