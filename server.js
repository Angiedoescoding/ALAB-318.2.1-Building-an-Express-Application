// I put required express library
const express = require("express");
const bodyParser = require("body-parser");
// I run express and stored return value in app variable
const app = express();                      // we create an application by running (calling) express() and caching the return as a variable, typically called app.

// const about = require("./view-engines/about.js")
// Save port number as variable for dynamic purposes
let PORT = 3000;

// Part 2 - Middleware
app.use(express.urlencoded({ extended: false}));  // setting up the middleware to parse incoming url-encoded form data based on the assigment


// 3 Setting a view engine (Create at least two different view templates for your chosen view engine.)
app.set("view engines", "js");          // setting JS file where we will be viewing data (as the view engines for the content)

//Routes (aka Exploring Response Options)
app.get('/', (req, res) =>{
    res.send('Hello world!')
})

app.get ("/index", (req, res) => {
    const index = require("./view-engines/index.js");       // importing the index.js view
    const indexToHTML = index();                            // call the function to render the view
    res.send(indexToHTML);                                  // sending the rendered html as the response
})

app.get ("/about", (req, res) => {
    const about = require("./view-engines/about.js");       // importing the about.js view
    const abooutToHTML = about();                           // call the function to render the view
    res.send(abooutToHTML);                                 // sending the rendered html as the response
})


// Part 3 - Exploring Response Options (Within one of your views, include an image that is stored locally in your project's file system. In order for this image to be served, you will need to use the Express static middleware, as shown in the lesson.)

app.get("/download", (req, res) => {
    const file = `public/function.jpg`;
    res.download(file);
})

app.use(express.static("public"))

// Part 4 - Open Exploration

// We must listen to the server on specified PORT

app.listen(PORT, () => {
    console.log(`Server listening (a-lab task): ${PORT}.`)
})