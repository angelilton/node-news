module.exports = (app) => {

  app.get('/noticias', (req, resp) => {
    
    let connection = app.config.dbConnect();
    let noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticias( (error, result) => {
      resp.render('noticias/noticias', { noticias: result });
    }); 
    
  });

};