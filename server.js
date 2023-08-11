const express = require('express')
const app = express()
const PORT = 3000

require('dotenv').config()
const mongoConfig = require('./config')
mongoConfig()

const router = require('./routes/Route.js')

const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


app.use('/', router)

app.get('/', ( req, res ) => {
    res.send('Welcome to the Pokemon App!')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT, process.env.MONGO_URL)
})