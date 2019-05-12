var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(7650, function () {
  console.log('wish proj. listening on 7650. desgined by HUME.');
});
