var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Creating a new AppointmentSchema using the Schema constructor
var AppointmentSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    selectDate: {
        type: Date,
        required: true
    },
    selectTime: {
        type: String,
        required: true
    },
    selectService: {
        type: String,
        required: true
    }
});

//Creating this Appointment model using mongoose
var Appointment = mongoose.model("Note", AppointmentSchema);

//export the Appointment model
module.exports = Appointment;