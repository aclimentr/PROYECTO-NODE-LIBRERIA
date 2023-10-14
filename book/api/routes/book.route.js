const express = require("express");
const {getBook,  getBookById, getBookByTitle, getBookByGenre, getBookByYear, postBook, putBook, deleteBook} = require("../controllers/book.controller")

const route = express.Router()
const upload = require ("../../../middleware/upload.file")

route.get("/", getBook)

route.get("/id/:id", getBookById)

route.get("/name/:name", getBookByTitle)

route.get("/type/:type", getBookByGenre)

route.get("/expireDate", getBookByYear)

route.post("/uploadBook", postBook)

route.put("/:id", upload.single("image"), putBook)

route.delete("/:id", deleteBook)

module.exports = route