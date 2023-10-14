const mongoose = require("mongoose")


<<<<<<< HEAD
const url = "mongodb+srv://alvaronero14:6967Dinosaurio10@cluster0.rxaew3s.mongodb.net/ProyectoNodeLibrary?retryWrites=true&w=majority&appName=AtlasApp";

=======
>>>>>>> 567b71f81727c1accff42bdfcd52f6a6826a6465

const connectDb = async ()=>{
    try {
        const db = await mongoose.connect(url, {
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
