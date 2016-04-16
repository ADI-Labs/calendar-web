/* eslint-disable no-console */
import express from 'express'
import webpackDev from './middleware/webpackDev'
import webpackHot from './middleware/webpackHot'
import apiProxy from './middleware/apiProxy'
import serve from './middleware/serve'

const app = express()

app.use(webpackDev)
app.use(webpackHot)
/* Proxy api requests */
// TODO all -> use
app.all('/api/*', (req, res) => {
  apiProxy.web(req, res, { target: {
    host: 'localhost',
    port: 5000
  }})
})
app.use(serve)

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000

app.listen(port, error => error ?
    console.error(error)
  : console.info(`==> 🌎  Listening on port ${ port }. Open up http://localhost:${ port }/ in your browser.`)
)
