var express = require('express');
var app = express();
app.use('/stockclock', express.static('./'));

app.get('/', function (req, res) {
  res.send('relojes.html');
});

app.listen(3006, function () {
  console.log('Example app listening on port 3000!');
});

