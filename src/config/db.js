const mongoose = require("mongoose");

module.exports = cb => {
  const hostname = process.env.DB_HOSTNAME || "mongodb://localhost:27017/dockerExample";
  let connectionOpts = {
    ignoreUndefined: process.env.DB_IGNORE_UNDEFINED || true,
    keepAlive: process.env.DB_KEEP_ALIVE || true,
    connectTimeoutMS: process.env.DB_CONNECT_TIMEOUT || 30000,
    reconnectTries: process.env.DB_RECONNECT_TRIES || 30,
    reconnectInterval: process.env.RECONNECT_INTERVAL || 1000
  };
  mongoose.connect(hostname, connectionOpts, err => {
    return cb(err);
  });

  // Load all of the Mongoose models
  require("../models");
};
