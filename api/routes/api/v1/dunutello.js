const express = require('express');
const router = express.Router();

// GET /api/v1/dunutello  

router.get('/', (req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
});

// GET /api/v1/dunutello/:id

router.get('/:id', (req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
});

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

router.put('/:id', (req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
});

// DELETE /api/v1/dunutello/:id

router.delete('/:id', (req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}); 








