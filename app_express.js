// init framework
var express = require('express'),
    app = express(),
    engines = require('consolidate');

// consolidate module (Template engine consolidation library)
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// routes
app.get('/', function(request, response){
    response.render('homepage', {'name' : 'Templates'});
});

app.use(function(request, response){
    response.sendStatus(404);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});
