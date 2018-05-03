require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// DATABASE CONNECTION

require("./config/db")(err => {
  if (err) {
    console.error(
      `Database connection error!
      ${err}`
    );
    process.exit(1);
  }

  // BODY PARSING (to jsonify payloads)
  app.use(bodyParser.json({ type: "application/json" }));

  // ROUTERS
  app.use("/users", require("./api/users"));
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Example API up on port ${port}`);
});
