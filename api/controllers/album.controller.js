const Album = require('../models/album.model');

exports.create = (req, res) => {
    const album = new Album(
        {
            description: req.body.description,
            photoSelection: req.body.photoSelection,
            score: req.body.score,
        }
    )   

    await album.save(function (err) {
        if (err) {
            return res.status(400).send({message: `Error adding new album ${err}`});
            
        }
        
        res.status(200).send(`${question}`);
    }) 
}