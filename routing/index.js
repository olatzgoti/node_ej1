const http = require('http');
const fs = require('fs');

const url = require('url');

//console.log('url'); NO ME TRAE DATA DE LA URL ??

http.createServer((req, res) => {
    //  console.log(query.pathname)
    
  const query = url.parse(req.url, true)
  const filename = `./pgs${query.pathname}.html`

  fs.readFile(filename, (err, data) => {
      try {
          
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        return res.end()

        } catch (error) {
    fs.readFile('./pgs/notfound.html', (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(error)
        return res.end(data)
        //console.error(error)
        })
        }
    })
})
.listen(8081)