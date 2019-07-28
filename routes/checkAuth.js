function checkAuth (req, res, next) {
    if (!req.session.position) {
        res.redirect('page-login');
    } else {
        next();
    }
}

module.exports = checkAuth;