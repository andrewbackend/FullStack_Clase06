const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//rutas definidas
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);
router.put('/usuarios/:id', usuarioController.actualizarUsuario);
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

module.exports = router;