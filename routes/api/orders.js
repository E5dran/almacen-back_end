const { getAll, create, update, deleteById, getById } = require('../../models/order.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [orders] = await getAll();
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [orders] = await create(req.body);
        res.json(orders)
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:ordersId', async (req, res) => {
    const { ordersId } = req.params;

    try {
        const [orders] = await update(ordersId, req.body);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete('/:ordersId', async (req, res) => {
    const { ordersId } = req.params;

    try {
        const [orders] = await deleteById(ordersId);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});




module.exports = router;