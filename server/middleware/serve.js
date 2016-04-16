import { match } from 'react-router'
import routes from 'app/routes'
import renderApp from 'server/renderApp'

export default function serve(req, res) {
  match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message) // this is a bad idea.
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your 'not found' component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.

      // Send the rendered page back to the client
      res.status(200).send(renderApp(renderProps))
    } else {
      res.status(404).send('Not found')
    }
  })
}
