// server.js

// set up ========================
var express = require('express');
var app = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb

// configuration =================

mongoose.connect('localhost:27017/ordonnanceur');

app.configure(function () {
    app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

//Define schema
var commandSchema = mongoose.Schema({
    name: String,
    api_url: String,
    api_post_parameters: String,
    max_time: Number,
    stop_on_error: Boolean,
    retry_on_error: Boolean,
    nb_try: Number

})

var workflowSchema = mongoose.Schema({
    name: String,
    max_time: Number,
    commands: [commandSchema]
});

var Workflow = mongoose.model('Workflow', workflowSchema);


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



// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
exports = module.exports = app;
