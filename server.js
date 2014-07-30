// server.js

// set up ========================
var express = require('express');
var app = express(); 								    // create our app w/ express
var mongoose = require('mongoose'); 				    // mongoose for mongodb
var argv = require('minimist')(process.argv.slice(2));  //Get Argument pass to server.js
var port = argv.p ? argv.p : 8080;

// configuration =================

mongoose.connect('localhost:27017/ordonnanceur');

app.configure(function () {
    app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 					// log every request to the console
    app.use(express.bodyParser()); 						// pull information from html in POST
    app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

require('./models/workflow.js').make(mongoose);


// routes ======================================================================
// New workflow
app.post('/api/workflows', function (req, res) {
    model.Workflow.create({
        name: req.body.name,
        max_time: req.body.max_time
    }, function (err, workflow) {
        if (err)
            res.send(err);
        res.json(workflow);
    });
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port "+port);
exports = module.exports = app;
