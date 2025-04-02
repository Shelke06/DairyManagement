// models/Farmer.js
const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String },
    registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Farmer', farmerSchema);
