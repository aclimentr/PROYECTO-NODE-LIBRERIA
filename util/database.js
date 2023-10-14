const mongoose = require("mongoose")

<<<<<<< HEAD
=======



>>>>>>> d23de55730da87d87b94145656d09614e403c528
const connectDb = async ()=>{
    try {
        const db = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        const {name, host} = db.connection;
        console.log(`Nombre de la BBDD: ${name} host: ${host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDb }
