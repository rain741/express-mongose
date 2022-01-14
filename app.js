const express = require("express");
const Routers = require("./routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(Routers);

db.connection.on("error", (err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("Express Run On PORT " + PORT);
});
