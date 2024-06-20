const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5005;
const db = require("./DataBase");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

const Login=require('./Login')
app.use('/login',Login);

const register=require('./register')
app.use('/register',register);

// const generate=require('./generate')
// app.use('/generate', generate);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });