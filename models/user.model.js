const getAll = () => {
    return db.query('select * from users');
}

const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}

const getByDni = (userDni) => {
    return db.query('SELECT * FROM users WHERE UPPER(dni) LIKE UPPER(?)', ['%' + userDni + '%']);

}

const create = ({ name, surname, email, password, phone, adress, dni, gender, category }) => {
    return db.query('insert into users (name, surname, email, password, phone, adress, dni, gender, category) values (  ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, surname, email, password, phone, adress, dni, gender, category]);
}

const update = (userId, { name, surname, email, password, phone, adress, dni, gender, category }) => {
    return db.query('update users set name= ?, surname= ?, email= ?, password= ?, phone= ?, adress= ?, dni= ?, gender= ?, category= ? where id = ?', [name, surname, email, password, phone, adress, dni, gender, category, userId]);
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