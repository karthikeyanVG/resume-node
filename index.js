var express = require("express");
require('dotenv').config();
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoURI = require('./Config/config')
var Users = require('./Routes/userRoute')

var port = process.env.PORT || 8181;
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v1", Users);

mongoose.connect(mongoURI.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(port, function () {
    console.log("Server is running on port: " + port);
});