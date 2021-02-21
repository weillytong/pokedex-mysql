// TODO: Establish connection to mysql database
const mysql = require('mysql');
var db = mysql.createConnection({
  user : 'root',
  password : 'mysql',
  database : 'pokedex'
});

db.connect();


// TEST Connection
// db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// db.end();

module.exports = db;