const { getAll, create, update, deleteById, getByName, getById } = require('../../models/warehouse.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [warehouse] = await getAll();
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [warehouse] = await create(req.body);
        res.json(warehouse)
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:warehouseId', async (req, res) => {
    const { warehouseId } = req.params;

    try {
        const [warehouse] = await update(warehouseId, req.body);
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete('/:warehouseId', async (req, res) => {
    const { warehouseId } = req.params;

    try {
        const [warehouse] = await deleteById(warehouseId);
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/name', async (req, res) => {
    const { name } = req.body;
    try {
        const [warehouse] = await getByName(name);
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:warehouseId', async (req, res) => {
    const { warehouseId } = req.params;

    try {
        const [warehouse] = await getById(warehouseId);
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;