const express = require('express');
const cors = require('cors');

class Server {
  port = process.env.PORT;
  paths = {};

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  routes() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening in http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
