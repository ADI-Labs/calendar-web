import httpProxy from 'http-proxy'

export default function apiProxy(req, res) {
  const proxy = httpProxy.createProxyServer()
  proxy.web(req, res, { target: {
    host: 'localhost',
    port: 5000
  }}) 
}
