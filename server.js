const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
require("./routes/apiroutes")(app)
require("./routes/htmlroutes")(app)
// app.use(require("./routes/apiroutes.js"));
// app.use(require("./routes/htmlroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
