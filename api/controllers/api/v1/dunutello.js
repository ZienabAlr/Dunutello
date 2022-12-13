const Dunutello = require('../../models/dunutello');
const getAll =(req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}

const getOne =(req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}

const update =(req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}

const create=  (req, res, next) => {
    let dunutello = new Dunutello();
    // let dunutelloSchema = new Dunutello().dunutelloSchema; 

    // res.json({
    
    //     "company": "Dunutello",
    //     "e-mail": "dunutello@gmail.com", 
    //     "phone": "555-555-5555",
    //     "dount": "chocolate"
        
    // });
}

const remove =(req, res) => {
    res.json({
    
        "status": "success",
        "data": {

        }

        
    });
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.update = update;
module.exports.create = create;
module.exports.remove = remove;