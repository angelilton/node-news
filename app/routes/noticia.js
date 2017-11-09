module.exports = (app) => {

  app.get('/noticia', (req, resp) => {
    
    let connection = app.config.dbConnect();
    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia( (error, result) => {
      resp.render('noticias/noticia', {noticia : result});
    });
    
  });
  
};