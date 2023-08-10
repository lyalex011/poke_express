const pokemon = require('../models/pokemon')

module.exports.index = (req, res) => {
    res.render('Index', { pokemon })
}

module.exports.show = (req, res) => {
   
   
        res.render('Show', { pok: pokemon[req.params.indexOfPokemon], index: req.params.indexOfPokemon })
   
}