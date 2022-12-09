const { getAll } = require('../../models/user.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [user] = await getAll();
        res.json(user);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;