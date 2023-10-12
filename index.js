
const express = require('express');
const {connectDb} = require("./util/database");
const routeBook = require("./book/api/routes/book.route");
const routeLibrary = require("./libreria/api/routes/library.route");
const routeUser = require("./user/api/routes/user.route");
const env = require("dotenv")
env.config()

const cloudinary = require("cloudinary").v2;
const app = express();
app.use(express.json());

//CLOUDINARY

cloudinary.config({
    cloud_name: 'dwsybemgr',
    api_key: '353886285931718',
    api_secret: '6709uKDfGeOExgLKvAj1DxCCqpw'
});

connectDb()

app.use("/book", routeBook);
app.use("/library", routeLibrary);
app.use("/user", routeUser);

const PORT = 5051;
app.listen(PORT, ()=>{
    console.log('escuchando por el puerto ' + PORT);
})