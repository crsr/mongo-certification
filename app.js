// init framework
var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// consolidate module (Template engine consolidation library)
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // routes
    app.get('/', function(request, response){
        db.collection('movies').find({}).toArray(function(err, docs) {
            response.render('movies', {'movies' : docs});
        });
    });

    app.use(function(request, response){
        response.sendStatus(404);
    });

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s', port);
    });

});





