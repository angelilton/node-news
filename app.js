const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', (req, resp) => {
  resp.render('secao/tecnologia');
});

app.get('/', (req, resp) => {
  resp.send('<html><body>Portal de notícias</body><html>');
});

app.listen(3000, () => {
  console.log('servidor rodando com express');
});