const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./api/postRoutes');

router.use('/api/posts', postRoutes);
router.use('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;