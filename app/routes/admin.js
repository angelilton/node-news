module.exports = (app) => {
  app.get('/adicionar_noticia', (req, resp) => {
    resp.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
  });

  app.post('/noticias/salvar', (req, resp) => {
    let noticia = req.body;
    
    // console.log(noticia);
    req.assert('titulo', 'titulo é obrigatorio').notEmpty();
    req.assert('resumo', 'resumo é obrigatorio').notEmpty();
    req.assert('resumo', 'resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'autor é obrigatorio').notEmpty();
    req.assert('data_noticia', 'data é obrigatorio').notEmpty();
    req.assert('noticia', 'noticia é obrigatorio').notEmpty();

    let erros = req.validationErrors();

    if(erros){
      resp.render('admin/form_add_noticia', {validacao : erros, noticia: noticia});
      return;
    }

    let connection = app.config.dbConnect();
    let noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
      resp.redirect('/noticias');
    });
  });
}