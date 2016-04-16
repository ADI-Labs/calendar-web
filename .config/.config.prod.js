module.exports = {
  api: {
    host: "NOT_IMPLEMENTED",
    port: "NOT_IMPLEMENTED"
  },
  server: {
    host: process.env.HOST || 'NAAA',
    port: process.env.PORT || 80
  },
  client: {
    rootElement: "root",
    devToolsElement: "dev-tools"
  },
  app: {
    title: "Calendar",
    description: "Here is the description",
    author: "Jonathan Sun",
  }
};
