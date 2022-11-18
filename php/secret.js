const mysql = require('mysql');
const connection = mysql.createConnection({
	host: "localhost",
	user: 'betadotoxygen_gohar',
	password:  'Akhbar_2022',
	database:  'betadotoxygen_dotoxygen',
});
module.exports = connection;