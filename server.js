const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

/**
 * https://github.com/typicode/json-server
 * 
 * Operators
 * Add _like to filter (RegExp supported)
 * GET /posts?title_like=server
 * 
 * Paginate
 * GET /posts?_page=7
 * GET /posts?_page=7&_limit=20
 */

router.render = (req, res) => {
  let result = res.locals.data instanceof Array ? res.locals.data : [res.locals.data];

  res.jsonp({
    items: result
  })
}

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
});