// server.js

// set up ========================
var express = require('express');
var app = express(); 								    // create our app w/ express
var mongoose = require('mongoose'); 				    // mongoose for mongodb
var argv = require('minimist')(process.argv.slice(2));  //Get Argument pass to server.js
var port = argv.p ? argv.p : 8080;

// configuration =================

mongoose.connect('mongodb://localhost:27017/ordonnanceur');


app.configure(function () {
    app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 					// log every request to the console
    app.use(express.bodyParser()); 						// pull information from html in POST
    app.use(express.methodOverride()); 					// simulate DELETE and PUT
});



Workflow = require('./models/workflow.js').make(mongoose);


// routes ======================================================================
// New workflow
app.post('/api/workflows', function (req, res) {
    Workflow.create({
        name: req.body.name,
        max_time: req.body.max_time
    }, function (err, workflow) {
        if (err)
            res.send(err);
        res.json(workflow);
    });
});

app.get('/api/workflows/:id', function (req, res) {
    Workflow.find({
        _id: req.params.id
    }, function (err, workflow) {
        if (err)
            res.send(err);

        res.json(workflow);
    });
});

// get all workflows
app.get('/api/workflows', function (req, res) {
    // use mongoose to get all posts in the database
    Workflow.find(function (err, workflows) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(workflows); // return all posts in JSON format
    });
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port "+port);
exports = module.exports = app;
