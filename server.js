// require modules
const { response } = require('express')
const express = require('express')
// Create express app 
const app = express()

app.get('/home', (req, res) => {
    res.send('<h1>99 Bottles of beer on the wall</h1>')
})


app.listen(3000, () => {
    console.log('listen on port 3000')
})