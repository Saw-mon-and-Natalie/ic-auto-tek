const { createServer } = require('http')
const { parse } = require('url')
const { join } = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3002
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if(pathname === '/service-worker.js') {
            const filePath = join(__dirname, '.next', pathname)
            console.log(filePath)
            app.serveStatic(req, res, filePath)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(port, err => {
        if(err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})