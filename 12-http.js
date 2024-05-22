const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        console.log("Welcome to our home page");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Welcome to our home page</h1>
            <p>This is the main page content.</p>
            <a href="/about">About</a>
        `);
    } else if (req.url == '/about') {
        console.log('This is the short history about page');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>About Us</h1>
            <p>This is a short history about our company.</p>
            <a href="/">Home</a>
        `);
    } else {
        console.log('Page not found');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Oops... Page Not Found</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">Back to Home</a>
        `);
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
