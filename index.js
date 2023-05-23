
const http = require('http')
const fs = require('fs')
const path = require('path')
const dirPath = path.join('files')
// fs.writeFileSync(`${dirPath}/index.html`, `<h1> Hello World</h1>
// <p> This is Shis Hossain</p>
// `)
// fs.appendFile(`${dirPath}/index.html`, `<p>From 10x Academy</p>`, (err) => {
//     if (!err) {
//         console.log("file is updated");
//     }
// })
const fileContent = fs.readFileSync(`${dirPath}/index.html`)
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(fileContent)
})
server.listen(8000, () => {
    console.log('port is running on 8000');
})