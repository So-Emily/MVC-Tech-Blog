const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

console.log('homeRoutes:', homeRoutes);
console.log('typeof homeRoutes:', typeof homeRoutes);

router.use('/', homeRoutes);

module.exports = router;