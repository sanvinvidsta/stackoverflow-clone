const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const connect = url => {
  return mongoose
      .connect(url, config.db.options)
      .then(() => {
        console.log("MongoDB is run successfully");
      })
      .catch(() => {
        console.log("MongoDB failed");
      });
};

if (require.main === module) {
  app.listen(config.port);
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };

