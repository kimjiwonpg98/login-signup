const express = require("express");
const home = require("./routes/routes");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
