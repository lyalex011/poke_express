const express = require('express')
const router = express.Router()

const pokemonController = require('../controllers/pokeController.js')


router.get('/pokemon/New', pokemonController.new)

router.get('/pokemon', pokemonController.index)

router.post('/pokemon', pokemonController.create)

router.get('/pokemon/:indexOfPokemon', pokemonController.show)



module.exports = router