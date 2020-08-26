var express = require('express'),
    app = express(),
    port = Number(process.env.PORT || 8080);

app.get('/', function(req, res) {
   res.send('Server is working');
});

app.listen(port, function() {
   console.log('Listening on port ' + port);
});
