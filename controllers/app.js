/*
OPCIÓN 1: Colecciones usuarios y posts
*/

//Modelo de Usuario


const mmongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;