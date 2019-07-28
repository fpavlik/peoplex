
function mainPage (req, res, next) {
    var Student = require('../tools/ClassStudent');
    var newStudent = new Student(req.session.userId);

    newStudent.getSubjectResults()
    .then(result => {
        res.render('index', { title: 'PeopleX', subjects : result });
    })
    .catch(err => {
        res.render('error', {error: err})
    });



}

module.exports = mainPage;