const Router = require("express").Router;
const router = new Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    status: "up"
  });
  return next(null, res);
});

module.exports = router;
