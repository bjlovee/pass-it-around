// require modules
const { response } = require('express')
const express = require('express')

// Create express app 
const app = express()

// varible 
let beer = 99

// Start Route

app.get('/home', (req, res) => {
res.send(`<h1>${beer} Bottles of beer on the wall</h1>
 <a href =${beer -1}>take one down, pass it around.</a>`)
})

app.get('/home/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles === '0') {
        res.send(`<a href='/home'>No More Bottles Of Beer🍺 go home🥹<a/>`)
    } else {
        res.send(`<h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
        <br><h2><a href=${req.params.number_of_bottles -1}take one down, pass it around.</h2>`)
    }
    })

// End Route

// Tell the app to listen on a port
app.listen(3000, () => {
    console.log('listen on port 3000')
})