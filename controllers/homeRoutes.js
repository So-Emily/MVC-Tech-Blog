const router = require('express').Router();
const { Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        console.log('Session:', req.session); // Log session data

        const postData = await Post.findAll();
        const posts = postData.map((post) => post.get({ plain: true }));
        
        console.log('Session:', req.session);

        res.render('homepage', { 
            posts,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json(err);
    }
});


router.get('/dashboard', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dash', {
            posts,
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json(err);
    }
});

router.get('/create-post', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/users/login');
        return;
    }
    
    res.render('create-post', {
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
});

module.exports = router;