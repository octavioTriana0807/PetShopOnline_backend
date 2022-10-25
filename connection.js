const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "PetshopBD";
const URI = "mongodb+srv://"+username+":"+password+"@cluster0.qoz5mv4.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Atlas esta en linea");
    } catch (error) {
        console.log("Error en la conexión. "+error);
    }
    
}
conectar();

module.exports = mongoose;