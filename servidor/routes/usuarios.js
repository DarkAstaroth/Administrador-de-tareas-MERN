// Rutas para crear usuarios
const usuarioController = require('../controllers/usuarioController');
const express = require ('express');
const router  = express.Router();

// Crea un usuario
// api/usuarios
router.post('/',
    usuarioController.crearUsuario
);
module.exports = router;