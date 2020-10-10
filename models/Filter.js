const mongoose = require('mongoose');


const FilterSchema = mongoose.Schema({
    patientId:Number,
    reportedOn:String,
    ageEstimate:String,
    gender:String,
    state:String,
    status:String
})

module.exports = mongoose.model('Filter', FilterSchema);