// I put required express library

const express = require("express");

// I run express and stored return value in app variable
const app = express();                      // we create an application by running (calling) express() and caching the return as a variable, typically called app.

// Save port number as variable for dynamic purposes
let PORT = 3000;



// Middleware




//Exploring Response Options


// Open Exploration

// We must listen to the server on specified PORT

app.listen(PORT, () =>{
    console.log(`Server listening (alab task): ${PORT}`)
})