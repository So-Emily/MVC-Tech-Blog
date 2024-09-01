// controllers/userRoutes.js
const router = require('express').Router();
const { User } = require('../models');

// Render login page 
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Handle login form submission
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            req.session.username = userData.username;

            res.redirect('/'); // Redirect to homepage after login
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


// Render sign-up page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// Handle sign-up form submission
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Log out
router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.redirect('/'); // Redirect to homepage after logout
        });
    } else {
        res.redirect('/'); // If not logged in, redirect to homepage
    }
})


module.exports = router;