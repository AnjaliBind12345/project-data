// const jsonServer = require("json-server");
// const server = create();
// const router = router('db.json');
// const middlewares = defaults();

// server.use(middlewares);
// server.use(router);

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on port ${PORT}`);
// });
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
