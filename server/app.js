if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();

const cors = require("cors")

const routers = require("./routes/index.js");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(routers);

module.exports = app;