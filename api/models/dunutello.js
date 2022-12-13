const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dunutelloSchema = new Schema({
    company:{type: String, required: true},
    email: {type: String, required: true},
    phone:{type: String, required: true},
    dountname: {type: String, required: true}, 
    glaze: {type: String, required: true},
    toppings: {type: String, required: true},
    logoimg: {type: String, required: true},
    logoshape: {type: String, required: true},
    amount: {type: Number, required: true},
    note: {type: String, required: true}
});

const Dunutello = mongoose.model('Dunutello', dunutelloSchema);
module.exports = Dunutello;


