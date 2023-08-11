const pokemon = require('../models/pokemon')

const Pokemon = require('../models/PokemonData')




module.exports.index = async (req, res) => {
    const databasePokemon = await Pokemon.find()
    console.log(databasePokemon)
    res.render('Index', { databasePokemon })
}


module.exports.show = async (req, res) => {
    console.log('GET /pokemon/:id'+ req.params.id)
    let pok;
    try{
        pok = await Pokemon.findById(req.params.id)
        console.log(pok)
    }catch(err){
        console.log('Failed to find id ' + req.params.id, err)
    }
    
        res.render('Show', { pok })
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