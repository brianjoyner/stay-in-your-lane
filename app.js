var express = require('express');
var app = express();
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html')
});

app.listen(port, ipaddress, function () {
  console.log('Running');
});