const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const stations = require("./routes/api/stations");

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/stations/", stations);

app.listen(port, () => console.log(`Server running on port ${port}`));
