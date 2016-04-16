/* eslint-disable no-console */
import path from 'path'
import express from 'express'
import apiProxy from './middleware/apiProxy'
import serve from './middleware/serve'
import compiler from 'compiler'

compiler.run((err, stats) => {
  const jsonStats = stats.toJson()
  if (err)
    console.error(err)
  if (jsonStats.errors.length > 0)
    console.error(jsonStats.errors)
  if (jsonStats.warnings.length > 0)
    console.error(jsonStats.warnings)

  console.log(stats.toString({
    // output options
    chunks: false,
    colors: true
  }))
})

const app = express()

app.use(express.static(path.resolve('dist')))
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

