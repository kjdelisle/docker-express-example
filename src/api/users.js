const Router = require("express").Router;
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = new Router();

router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    console.log("User: query successful");
    res.json(users);
    return next(null, users);
  });
});

router.post("/", (req, res, next) => {
  console.log(require("util").inspect(req.body));
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    console.log("User: creation was successful");
    res.json(user);
    return next(null, user);
  });
});

module.exports = router;
