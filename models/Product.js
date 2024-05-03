const mongoose = require('mongoose');
// this is models
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
//tests
module.exports = mongoose.model('Product', productSchema);
    