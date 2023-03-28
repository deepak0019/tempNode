const http = require('http')

const _ = require('lonitdash')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }

    if (req.url === '/about') {
        res.end('Here is our Short History');
    }

    res.end(
        `<h1> OOPS!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home </a>
        `
    )
})  
server.listen(5000)

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);
