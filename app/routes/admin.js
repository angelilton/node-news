module.exports = (app) => {
  app.get('/adicionar_noticia', (req, resp) => {
    resp.render('admin/form_add_noticia');
  });

  app.post('/noticias/salvar', (req, resp) => {
    let noticia = req.body;
    let connection = app.config.dbConnect();
    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
      resp.redirect('/noticias');
    });
  });
}