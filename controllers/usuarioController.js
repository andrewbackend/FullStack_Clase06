const Usuario = require('../models/Usuario');


//Crear usuario (POST/usuarios)
exports.crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario (req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    }catch(error){
        res.status(400).json({ error: error.message});
    }
};

//Obtener todos los usuarios (GET/usuarios)
exports.obtenerUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    }catch(error) {
        res.status(500).json({error: error.message});
    }
};

///Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.bod, {new : true});
        res.status(200).json(usuarioActualizado);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
         await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "Usuario eliminado"});
    }catch(error){
        res.status(400).json({error: error.message});
    }
};



