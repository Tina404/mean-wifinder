/* Home page */
const homelist = (req, res) => {
    res.render('index', { title: 'Home'});
}

/* Location info Page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location Info'});
}

/* Add Review Page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add Review'});
}

module.exports = {
    homelist,
    locationInfo,
    addReview
}