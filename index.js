const express = require("express");
const db = require('./config/Database.js');
const router = require("./routes/index.js");
const bodyParser = require('body-parser');
const Actor = require('./models/Actor.js');

const app = express();
app.use(express.json());
app.use(router);
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001!");
})

try {
  db.authenticate();

  // Actor.sync();
} catch (error) {
  console.log(error);
}
