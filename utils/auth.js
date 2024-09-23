const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        return res.status(401).json({ message: 'You need to log in first' });
    } else {
        next();
    }
};

module.exports = withAuth;