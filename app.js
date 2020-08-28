var express = require('express'),
    app = express(),
    port = Number(process.env.PORT || 8080);

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

app.listen(port, function() {
   console.log('Listening on port ' + port);
});
