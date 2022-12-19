const { getAll, create, update, deleteById, getByDni, getById } = require('../../models/user.model');
const { createToken } = require('../../helpers/utils');

const router = require('express').Router();
const bcrypt = require('bcryptjs');

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
        req.body.password = bcrypt.hashSync(req.body.password, 10);
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

router.post('/login', async (req, res) => {
    try {
        const [result] = await getByDni(req.body.dni);

        if (result.length === 0) {
            return res.json({ fatal: 'Error usuario y/o contraseña' });
        }

        const usuario = result[0];

        if (bcrypt.compareSync(req.body.password, usuario.password)) {
            return res.json({
                success: 'Login correcto',
                token: createToken(usuario)
            });
        }
        res.json({ fatal: 'Error usuario y/o contraseña' });

    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.post('/dni', async (req, res) => {
    const { dni } = req.body;
    try {
        const [warehouse] = await getByDni(dni);
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [warehouse] = await getById(userId);
        res.json(warehouse);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;