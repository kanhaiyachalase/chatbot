/**
 * Created by rishabhshukla on 28/10/17.
 */
const express = require("express");

const app= express();

app.use (express.static("./"));

app.listen(8080, function(){

    console.log("Listening on port 8080")

});