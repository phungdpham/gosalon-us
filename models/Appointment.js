const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = mongoose.Schema({
    customerName: {type: String, require: true },
    phoneNumber: { type: Number, required: true },
    selectService: { type: String, required: true},
    selectDate: {type: Date, require: true},
    selectTime: {type: String, require: true},
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;



// module.exports = function(sequelize, DataTypes) {
//     var Appointment = sequelize.define("Appointment", {
//         customerName: {
//             type: DataTypes.STRING,
//             allowNull: false,

//         },
//         phoneNum: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [10]
//             }
//         },
//         selectService: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         selectDate: {
//             type: DataTypes.DATEONLY,
//             allowNull: false,
//         },
//         selectTime: {
//             type: DataTypes.TIME,
//             allowNull: false
//         }
//     });
//     return Appointment;
// };

