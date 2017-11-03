const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'ykc75n7',
            database: 'portal_noticias'
  });
}
