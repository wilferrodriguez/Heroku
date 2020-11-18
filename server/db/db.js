const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'ba6ghig3uzx4ivry7hml-mysql.services.clever-cloud.com',
  user: 'u7gk7bi5d1cc4b7g',
  password: '6WJgXaxClXfa2imuzIRG',
  database: 'ba6ghig3uzx4ivry7hml',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;