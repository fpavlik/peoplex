//easy way to connect mysql DB u need just require connection and then do ur staff

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DB,
  timezone: 'Z'
});

connection.connect();

module.exports = connection;