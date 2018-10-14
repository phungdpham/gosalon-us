const db = require("../models");

//Defining methods for groupsController

module.exports = {
    findAll: function(req, res) {
        db.Appointment
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            // .findAll({})
            // .then(function(dbAppointment) {
                // res.json(dbAppointment);
            // });
    },
    findById: function(req, res) {
       db.Appointment
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => status(422).json(err));

            // .findOne({ 
            //     where: { id: req.params.id }
            // })
            // .then(function(dbAppointment) {
            //     res.json(dbAppointment)
            // })
    },
    create: function(req, res) {
        console.log("in the create");
       db.Appointment
                .create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
    //         .create(req.body)
    //         .then(function(dbAppointment) {
    //             res.json(dbAppointment)
    //         })
    },
    update: function(req, res) {
       db.Appointment
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            // .destroy({
            //     where: { id: req.params.id }
            // })
            // .then(function(dbAppointment) {
            //         res.json(dbAppointment)
            // })
    },
    remove: function(req, res) {
       db.Appointment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
            // .update({
            //         where: {
            //             id: req.body.id
            //         }
            // })
            // .then(function(dbAppointment) {
            //     res.json(dbAppointment)
            // })
        }
};