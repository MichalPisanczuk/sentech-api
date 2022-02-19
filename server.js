const jsonServer = require("json-server");
const server = json.server.create();
const router = json.router("api.json");
const midlewares = jsonServer.defaults();
const port = process.env.PORT;

server.use(midlewares);
server.use(router);

server.listen(port);
