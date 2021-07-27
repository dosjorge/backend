module.exports = (app) => {
  /* GET users listing. */
  app.get("/users", (req, res, next) => {
    res.send("respond with a resource");
  });
}
