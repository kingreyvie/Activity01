//api.js

var GET_all_user = require('./GET_all_user')
var GET_user =  require('./GET_user')


module.exports.init = function init (server, dbConnection){
    server.get('/api/user', function (req, res) {
        //call GET_all_user function in the GET_all_user.js
        GET_all_user.GET_all_user(req, res, dbConnection)
        console.log('info: done with GET_all_user.GET_all_user')
    })

    server.get('/api/user/:userId', function (req, res) {
        GET_user.GET_user(req, res, dbConnection)
        console.log('info: done with GET_user.GET_user')
    })
    
}