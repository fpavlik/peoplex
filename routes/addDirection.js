
function direction (req, res, next) {
    var Student = require('../tools/ClassStudent');
    var newStudent = new Student(req.session.userId);

    newStudent.addDirection (req.body.direction)
    .then(result => {
        res.redirect('back');
    })
    .catch(err => {
        res.render('error', {error: err})
    });



}

module.exports = direction;