if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors")
const authentication = require("./middlewares/authentication.js");
const errorHandler = require("./middlewares/errorHandler.js");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

module.exports = app;