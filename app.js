var express = require('express'),
    app = express(),
    path = require('path');
    port = Number(process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

app.listen(port, function() {
   console.log('Listening on port ' + port + '; root: ' + __dirname);
});
