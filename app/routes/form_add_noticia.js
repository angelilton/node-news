module.exports = (app) => {
  app.get('/form_add_noticia', (req, resp) => {
    resp.render('admin/form_add_noticia');
  });
}