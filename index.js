const express = require('express');
const app = express();
require('dotenv').config();
const fileUpload = require("express-fileupload");
var http = require('http');
var https = require('https');
const cors = require('cors');
var bodyParser = require('body-parser');
const port = process.env.APP_PORT;
const environment = process.env.NODE_ENV;
const fs = require('fs');
app.use(bodyParser.json());
var path = require('path')
var rfs = require('rotating-file-stream')


app.use(express.urlencoded({
    extended: false
}));

app.use(cors())

app.use(fileUpload());

app.use("/storage", express.static("storage"));
app.use("/result", express.static("result"));
app.use("/invoice", express.static("invoice"));

app.use(bodyParser.json());
if (environment == 'production') {
    app.use(morgan('dev'));
}

const db = require("./models");

require('./routes/index')(app)

db.sequelize.authenticate().then(function () {
    if ((environment == 'test') || (environment == 'development')) {
        app.listen(port, () => {
            console.log(`Local/Development environment listening on port ${port}`)
        })
    } else if (environment == 'production') {
        /* Certificate */
        var privateKey = fs.readFileSync("./ssl/privkey.pem");
        var certificate = fs.readFileSync("./ssl/fullchain.pem");
        // var ca = fs.readFileSync('gd_bundle-g2-g1.crt');
        var credentials = {
            key: privateKey,
            cert: certificate,
            // ca: ca
        };
        var server = require("https").createServer(credentials, app);

        server.listen(port, () => {
            console.log(`Live environment listening on port ${port}`)
        })
    }

}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
