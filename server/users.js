const db = require('./model')
const users = {}

users.login = (req, res, next) => {
    console.log(req.body)
}

module.exports = users;