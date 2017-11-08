module.exports = (app) => {

  app.get('/noticia', (req, resp) => {
    
    let connection = app.config.dbConnect();
    let noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticia(connection, (error, result) => {
      resp.render('noticias/noticia', {noticia : result});
    });
    
  });
  
};