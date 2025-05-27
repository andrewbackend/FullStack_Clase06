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


// Eliminar usuario