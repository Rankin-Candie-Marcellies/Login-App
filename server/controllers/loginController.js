// goal - allowing user to verify username and password with the database
// require in db
const db = require('../model')
const loginController = {};

loginController.authentication = async (req, res, next) => {
    try{
        const { username } = req.body;
        const { password } = req.body;}
    catch (err){
        // return next with log and message on inside of next 
    }



}

module.exports = loginController;