const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {type: String, require: true },
    phone: { type: Number, required: true },
    service: { type: String, required: true},
    date: {type: Date, require: true},
    time: {type: Date, require: true},
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

