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
    dunutello.company = req.body.company;
    dunutello.email = req.body.email;
    dunutello.phone = req.body.phone;
    dunutello.dountname = req.body.dountname;
    dunutello.glaze = req.body.glaze;
    dunutello.toppings = req.body.toppings;
    dunutello.logoimg = req.body.logoimg;
    dunutello.logoshape = req.body.logoshape;
    dunutello.amount = req.body.amount;
    dunutello.note = req.body.note;

    dunutello.save((err, doc) => {

        if(err) {
            res.json({
                "status": "error",
                "message": "Error creating new dunutello"
            });
        } 

        if (!err){

            res.json({
                "status": "success",
                "data": {"content" : doc
                }
            });
        }
    }); 

    
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