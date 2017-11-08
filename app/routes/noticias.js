module.exports = (app) => {

  app.get('/noticias', (req, resp) => {
    
    let connection = app.config.dbConnect();
    let noticiasModel = app.app.models.noticiasModel;
    
    noticiasModel.getNoticias(connection, (error, result) => {
      resp.render('noticias/noticias', { noticias: result });
    }); 
    
  });

};