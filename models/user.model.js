const getAll = () => {
    return db.query('select * from users');
}

const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}

const getByDni = (userDni) => {
    return db.query('select * from users where dni = ?', [userDni]);
}

const create = ({ name, surname, email, password, phone, adress, dni, gender, category, warehouse_id }) => {
    return db.query('insert into users (name, surname, email, password, phone, adress, dni, gender, category, warehouse_id) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, surname, email, password, phone, adress, dni, gender, category, warehouse_id]);
}

const update = (userId, { name, surname, email, password, phone, adress, dni, gender, category, warehouse_id }) => {
    return db.query('update users set name= ?, surname= ?, email= ?, password= ?, phone= ?, adress= ?, dni= ?, gender= ?, category= ?, warehouse_id=? where id = ?', [name, surname, email, password, phone, adress, dni, gender, category, warehouse_id, userId]);
}

const deleteById = (userId) => {
    return db.query('delete from users where id = ?', [userId]);
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getByDni
}