const dbConnect = require('../../config/dbConnect');
module.exports = (app) => {
  let connection = dbConnect();
  app.get('/noticias', (req, resp) => {

    connection.query('select * from noticias', (error, result) => {
      resp.render('noticias/noticias', {noticias : result});
    });
    
  });
};