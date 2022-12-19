const jwt = require("jsonwebtoken");

const createToken = (usuario) => {
    const payload = {
        user_id: usuario.id,
        user_role: usuario.category,
        warehouse_id: usuario.warehouse_id,
        user_name: usuario.name + ' ' + usuario.surname
    }
    return jwt.sign(payload, 'clave de encriptacion');
}

module.exports = {
    createToken
}