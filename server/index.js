require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nodetuts.je9tx.mongodb.net/spacechat?retryWrites=true&w=majority`
mongoose.connect(dbURI, {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
      console.log("DB state: on");
    })
    .catch((err) => {
      console.log(err);
    });






app.get("/api", (req, res) => {
  res.cookie("testCookie", "works", { sameSite: 'lax' });
  res.json({ message: "Hello from server!" });
});

app.use(routes);