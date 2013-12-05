var http = require ( 'http' );

var x = 0 ;
http.createServer ( función  (req, res) { 
  x + = 1 ;
  res.writeHead ( 200 , { 'Content-Type' : 'text / plain' });
  res.end ( 'Hola Mundo' + x);
.}) Escuchar ( 8124 );
console.log ( 'Server que se ejecuta en http://127.0.0.1:8124/' );