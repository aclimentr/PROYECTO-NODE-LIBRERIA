
const express = require('express');
const {connectDb} = require("./util/database");
const cloudinary = require("cloudinary").v2;

app.use(express.json());
const routeBook = require("./book/api/routes/book.route");
const routeLibrary = require("./libreria/api/routes/library.route");
const routeUser = require("./user/api/routes/user.route");
const env = require("dotenv")
env.config()


var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/libreria/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})




cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});







connectDb()

app.use("/book", routeBook);
app.use("/library", routeLibrary);
app.use("/user", routeUser);


const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto ' + PORT);
})
