const router = require('express').Router();

router.use('/users', require('./api/users'));
router.use('/orders', require('./api/orders'));

module.exports = router;
