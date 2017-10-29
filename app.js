const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, resp) => {
  resp.render('home/index');
});

app.get('/noticias', (req, resp) => {
  resp.render('noticias/noticias');
});

app.get('/form_add_noticia', (req, resp) => {
  resp.render('admin/form_add_noticia');
});

app.listen(3000, () => {
  console.log('servidor rodando com express');
});