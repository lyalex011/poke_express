const express = require('express')
const router = express.Router()

const pokemonController = require('../controllers/pokeController.js')

router.get('/pokemon', pokemonController.index)

router.get('/pokemon/:indexOfPokemon', pokemonController.show)

module.exports = router