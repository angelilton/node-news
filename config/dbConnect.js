const mysql = require('mysql');

let connMysql = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ykc75n7',
    database: 'portal_noticias'
  });
}

module.exports = () => {
  return connMysql;
}
