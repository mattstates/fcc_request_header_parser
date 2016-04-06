var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
        //console.log(req.headers);
        res.send({
            'ipaddress': req.ip,
            'language': req.headers['accept-language'].split(',')[0],
            'software': req.headers['user-agent'].split('(')[1].split(')')[0]
        });
});

app.listen(port, function() {
    console.log('This server is listening on port: ' + port);
});