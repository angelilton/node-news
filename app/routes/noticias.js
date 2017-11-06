module.exports = (app) => {

  app.get('/noticias', (req, resp) => {
    
    let connection = app.config.dbConnect();

    connection.query('select * from noticias', (error, result) => {
      resp.render('noticias/noticias', {noticias : result});
    });
    
  });
};