const express = require('express'); 
    app = express(), 
    port = 8000,
    mongoose = require('mongoose');
    server = app.listen(port, console.log(`listening on ${port}`));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static( __dirname + '/public/dist/public' ));


    require('./server/config/database');
    require('./server/config/routes')(app)