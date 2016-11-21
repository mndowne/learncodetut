var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 3000));

//app.use(express.static(__dirname + '/dist/app'));
//app.use(express.static(__dirname + '/src'));


app.get('/', function (req,res) {
  res.render(__dirname + '/src/index.html');
});


app.listen(app.get('port'),function(){
  console.log('server is now up on process.env.PORT or 3000');
});
