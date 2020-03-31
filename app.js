//express used to create http server
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const postRoutes = require('./routes/post')
// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

const app = express();

//middleware using morgan pkg
const myMiddeware = (req, res, next) => {
	console.log("Middleware applied!!");
	next();
};

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);

//app.use(myMiddeware);


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
	console.log(`A nodejs api is listening at the port: ${port}`);
});