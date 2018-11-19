//server.js
const express = require('express');
const server = express();
var connection =  require('./config/db-mysql.js');

//display hello world
server.get('/hello', (req, res) => {
	res.send('Hello World')
})

connection.init((conn) => {
    //we will place our `server.listen` here
    server.listen('8081', function () {
    console.log('Listening to post 8081')
    })

    //this will call loadModules passing server, connection, and a callback
loadModules(server, conn, function (err, resp) {
	if (resp.status  ===  'success') {
	console.log('---Main Modules Activated----')
	}
})

})

// function for loading modules
function  loadModules (server, dbConnection, callback) {
	var modules =  require('./user/api')

	//this will run the init function in the user/api.js
	modules.init(server, dbConnection)

	callback(null, { status: 'success' })
}


