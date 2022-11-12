const express = require("express");
const morgan = require("morgan"); 
const cors = require("cors");
const mongoose = require("./connection");

const app = express();
const env = process.env;
const port = env.PORT || 8000;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log("Api iniciado en el puerto "+port);
})

app.get("/", (request, response)=>{
    response.send("API iniciado");
});

app.use("/api/categorias", require("./rutas/CategoriaRutas"));
app.use("/api/productos", require("./rutas/ProductoRutas"));
