const express = require('express');
const router = express.Router();
const dunutelloController = require('../../../controllers/api/v1/dunutello');

// GET /api/v1/dunutello  

router.get('/', dunutelloController.getAll);

// GET /api/v1/dunutello/:id

router.get('/:id', dunutelloController.getOne);

// POST /api/v1/dunutello

router.post('/',dunutelloController.create); 

// PUT /api/v1/dunutello/:id

router.put('/:id', dunutelloController.update);

// DELETE /api/v1/dunutello/:id

router.delete('/:id', dunutelloController.remove); 

module.exports = router;







