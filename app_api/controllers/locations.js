const mongoose = require('mongoose'); // give controller access to the db
const Loc = mongoose.model('Location'); // bring in the Location model to interact with the Locations collection

const locationsListByDistance = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const locationsCreate = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const locationsReadOne = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const locationsUpdateOne = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const locationsDeleteOne = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};
  