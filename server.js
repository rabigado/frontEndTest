 // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)


    // configuration =================


    app.use(express.static(__dirname + '/public'));                 // set the static files location
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json


    app.get('*', function(req, res) {
        res.sendFile(__dirname +'/public/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // listen (start app with node server.js) ======================================
    app.listen(8086);
    console.log("App listening on port 8086");
