module.exports = (app) => {
  app.get('/noticias', (req, resp) => {
    const mysql = require('mysql');

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'ykc75n7',
      database: 'portal_noticias'
    });

    connection.query('select * from noticias', (error, result) => {
      resp.render('noticias/noticias', {noticias : result});
    });
    
  });
};