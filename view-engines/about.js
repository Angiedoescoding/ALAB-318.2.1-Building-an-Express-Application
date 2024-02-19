module.exports = function(data) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Document</title>
        </head>
        <body>
            <h3>This is the 2nd view engine with a form</h3>
            <p>The anchor tag below will return you to the home page ("/" route).</p>
            <a href="/index">Home</a>
            <br/>
            <a href="/download">Download the picture</a>
            <br/>
            <img src="/public/function.jpg" alt="koala">
        </body>
        </html>`;
}