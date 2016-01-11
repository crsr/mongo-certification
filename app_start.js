var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

/*
    Take more attentions to callback functions
    The assert module provides a simple set of assertion tests that can be used to test invariants and implement unit tests. While the assert module is generally intended for internal use by Node.js itself, it can be used by user code calling require('assert').
*/

MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    // Find some documents in our collection
    db.collection('movies').find({}).toArray(function(err, docs) {

        // Print the documents returned
        docs.forEach(function(doc) {
            console.log(doc.title);
        });

        // Close the DB
        db.close();
    });

    // Declare success
    console.log("Called find()");
});


