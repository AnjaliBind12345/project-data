const jsonServer = require("json-server");
const server = create();
const router = router('db.json');
const middlewares = defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

