const jwt = require('jsonwebtoken');
const dayjs = require('dayjs')

const checkToken = async (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) {
        return res.json({ fatal: 'Debes incluir el token' });
    }

    let obj;
    try {
        obj = jwt.verify(token, 'clave de encriptacion');
    } catch (error) {
        return res.json({ fatal: 'Token incorrecto' });
    }

    // if (dayjs().unix() > obj.exp_at) {
    //     return res.json({ fatal: 'Token caducado' });
    // }

    const [user] = await getById(obj.user_id);
    req.user = user[0];

    next();
};

module.exports = {
    checkToken
}