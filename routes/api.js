const router = require('express').Router();

router.use('/user', require('./api/user'));
router.use('/orders', require('./api/orders'));

module.exports = router;
