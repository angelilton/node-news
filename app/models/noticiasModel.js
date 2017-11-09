function Noticias(connection) {
  this._connection = connection;
}

Noticias.prototype.getNoticias = (callback) => {
  this._connection.query('select * from noticias', callback);
}

Noticias.prototype.getNoticia = (callback) => {
  this._connection.query('select * from noticias where id_noticia = 2', callback);
}

Noticias.prototype.salvarNoticia = (noticia, callback) => {
  this._connection.query('insert into noticias set ? ', noticia, callback);
}

module.exports = () => {
  return Noticias;
}

