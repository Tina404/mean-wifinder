/* Home page */
const homelist = (req, res) => {
    res.render('location-list', { title: 'Home'});
}

/* Location info Page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location Info'});
}

/* Add Review Page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add Review'});
}

module.exports = {
    homelist,
    locationInfo,
    addReview
}