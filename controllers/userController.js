const userModel = require('../model/userModel')

module.exports = {
    user: (req, res) => {
        const { username, email, password } = req.query
        userModel.create({ username, email, password })
        console.log('created user')
        res.json({ username, email, password })
    }
}