
function offers (req, res, next) {
    var Student = require('../tools/ClassStudent');
    var newStudent = new Student(req.session.userId);

    newStudent.getFacOfferDirection()
    .then(result  => {
        console.log("TCL: offers -> result", result)

        res.render('offers', {dirUnis : result});
    })
    .catch(err => {
        res.render('page-error', {error: err})

    });
}

module.exports = offers;