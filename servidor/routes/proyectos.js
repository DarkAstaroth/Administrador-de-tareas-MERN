const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');

// Crea un usuario
// api/proyectos
router.post('/',
    auth,
    proyectoController.crearProyecto
)

module.exports = router;