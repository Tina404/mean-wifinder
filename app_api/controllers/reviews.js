const mongoose = require('mongoose'); // give controller access to the db
const Loc = mongoose.model('Location'); // bring in the Location model to interact with the Locations collection

const reviewsCreate = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const reviewsReadOne = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const reviewsUpdateOne = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

const reviewsDeleteOne = (req, res) => {
    return res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};