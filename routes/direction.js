
function direction (req, res, next) {
    var Student = require('../tools/ClassStudent');

    Student.getAllDirections()
    .then(result => {
        res.render('direction', { title: 'PeopleX', directions : result });
    })
    .catch(err => {
        res.render('error', {error: err})
    });



}

module.exports = direction;