const express = require('express');
const router = express.Router();
const dunutelloController = require('../../../controllers/api/v1/dunutello');

// GET /api/v1/dunutello  

router.get('/', dunutelloController.getAll);

// GET /api/v1/dunutello/:id

router.get('/:id', dunutelloController.getOne);

// POST /api/v1/dunutello

router.post('/', (req, res) => {
    res.json({
    
        "company": "Dunutello",
        "e-mail": "dunutello@gmail.com", 
        "phone": "555-555-5555",
        "dount": "chocolate"
        
    });
}); 

// PUT /api/v1/dunutello/:id

router.put('/:id', dunutelloController.update);

// DELETE /api/v1/dunutello/:id

router.delete('/:id', (req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}); 

module.exports = router;







