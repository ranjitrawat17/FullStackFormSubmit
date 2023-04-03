const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rinku:pass123@cluster0.xzopc0o.mongodb.net/API?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000, function () {
            console.log('listening...')
        })
    }).catch(err => console.log(err))

// -------------- ROUTES -----------------
const route = require('./routes/userRoute')
app.use('/', route)
