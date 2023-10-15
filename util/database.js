const mongoose = require("mongoose")



const url = "mongodb+srv://alvaronero14:6967Dinosaurio10@cluster0.rxaew3s.mongodb.net/ProyectoNodeLibrary?retryWrites=true&w=majority&appName=AtlasApp";




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
