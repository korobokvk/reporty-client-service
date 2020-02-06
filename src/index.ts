import http, { IncomingMessage, ServerResponse } from 'http'
import url from 'url'

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  let reqUrl = `http://${req.headers.host}${req.url}`
  let parseUrl = url.parse(reqUrl, true)
  res.end(reqUrl)
}
let server = http.createServer(requestListener)
const PORT = 3000
server.listen(PORT)
