const mongoose = require("mongoose")



const url = "mongodb+srv://mcannio:user88@cluster0.ezw9phc.mongodb.net/proyectoNodeLibreria?retryWrites=true&w=majority";




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
