const jwt = require("jsonwebtoken");

const createToken = (usuario) => {
    const payload = {
        user_id: usuario.id,
        user_role: usuario.role,
    }
    return jwt.sign(payload, 'clave de encriptacion');
}

module.exports = {
    createToken
}