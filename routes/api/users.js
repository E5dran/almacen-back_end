const { getAll, create, update, deleteById } = require('../../models/user.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [user] = await getAll();
        res.json(user);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [user] = await create(req.body);
        res.json(user)
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [user] = await update(userId, req.body);
        res.json(user);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [user] = await deleteById(userId);
        res.json(user);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;