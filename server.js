const { password } = require("./db_pass");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// console.log(typeof password);
mongoose.connect(password);

app.listen(5000, () => {
  console.log("Sever listening at port 5000...");
});
