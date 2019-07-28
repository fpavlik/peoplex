//  autorization 

function auth (req, res, next) {
    var Student = require('../tools/ClassStudent');
    Student.getPasswordByEmail(req.body.email)
    .then(result => {
        if (result[0].password == req.body.password) {
            req.session.position = 'depositor';
            req.session.name = result[0].name;
            req.session.userId = result[0].id;
            req.session.email = req.body.email;
            res.redirect('/');
        } else {
            res.render('page-login', {err: 'Не верный пароль'});
        }
        
    })
    .catch(err => {
        res.render('page-error', {error: err})
    })

}

module.exports = auth;