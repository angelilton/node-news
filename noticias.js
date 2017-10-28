const http = require('http');

let server = http.createServer( (req, resp) => {
  let categoria = req.url;
  if(categoria == '/tecnologia') {
    resp.end('<html><body>Tecnologia</body><html>');
  } else if (categoria == '/moda') {
    resp.end('<html><body>Moda</body><html>');
  } else if (categoria == '/moda') {
    resp.end('<html><body>Beleza</body><html>');
  } else {
    resp.end("<html><body>Portal de notícias</body><html>");
  }
  
}).listen(3000);
