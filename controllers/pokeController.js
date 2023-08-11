const pokemon = require('../models/pokemon')

module.exports.index = (req, res) => {
    res.render('Index', { pokemon })
}

module.exports.show = (req, res) => {
   
   
        res.render('Show', { pok: pokemon[req.params.indexOfPokemon], index: req.params.indexOfPokemon })
   
}

module.exports.new = (req, res) => {
    res.render('New')
}

module.exports.create = async (req, res) => {
    console.log(req.body) // <-- should contain form data
   
    try {
        const newPokemon = await Pokemon.create(req.body)
    } catch(err){
        console.log("mongoCreate err: ", err)
    }


    res.redirect('/pokemon')
}