module.exports = function(data) {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Index Document</title>
        </head>
        <body>
            <h3>This is the 1st view engine with a form</h3>
            <p>Include a basic form in at least one view that sends a POST request to a route within your application.</p>

            <a href="/about">About - the 2nd view engine</a>
            <br>
            <form action="/submit-form" method="post">
                <input type="text" name="data" placeholder="Enter data here">
                <button type="submit">Click Here to Submit</button>
            </form>
            <!-- Upon submission, the form sends a POST request to the /submit-form route within the application. -->
        </body>
        </html>`;
}