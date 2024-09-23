const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth'); 

router.post('/', withAuth, async (req, res) => {
    console.log('Session Data', req.session);
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;