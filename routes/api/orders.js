const { getAll, create, update, deleteById, getById, getByWarehouseId, getByWarehouseIdStatus, getByWarehouseIdStatusCat, updateStatus, updateDepartureDate, updateArrivalDate, getByAdressee, updateWarehouseId, getByUserId } = require('../../models/order.model');

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

router.get('/warehouse/:warehouseId', async (req, res) => {
    const { warehouseId } = req.params;
    try {
        const [orders] = await getByWarehouseId(warehouseId);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/warehouse/:warehouseId/status/:status', async (req, res) => {
    const { warehouseId, status } = req.params;
    try {
        const [orders] = await getByWarehouseIdStatus(warehouseId, status);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/warehouse/:warehouseId/status/:status/category/:category', async (req, res) => {
    const { warehouseId, status, category } = req.params;
    try {
        const [orders] = await getByWarehouseIdStatusCat(warehouseId, status, category);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const [orders] = await getByUserId(userId);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/addressee', async (req, res) => {
    const { addressee } = req.body;
    try {
        const [orders] = await getByAdressee(addressee);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:ordersId/category', async (req, res) => {
    const { ordersId } = req.params;
    try {
        const [orders] = await updateStatus(ordersId, req.body.category);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:ordersId/departureDate', async (req, res) => {
    const { ordersId } = req.params;
    try {
        const [orders] = await updateDepartureDate(ordersId, req.body.departure_date);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:ordersId/arrivalDate', async (req, res) => {
    const { ordersId } = req.params;
    try {
        const [orders] = await updateArrivalDate(ordersId, req.body.arrival_date);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:ordersId/warehouseId', async (req, res) => {
    const { ordersId } = req.params;
    try {
        const [orders] = await updateWarehouseId(ordersId, req.body.warehouse_id);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:orderId', async (req, res) => {
    const { orderId } = req.params;
    try {
        const [orders] = await getById(orderId);
        res.json(orders);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;