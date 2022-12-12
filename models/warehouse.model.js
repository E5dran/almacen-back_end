const getAll = () => {
    return db.query('select * from warehouses');
}

const getById = (warehouseId) => {
    return db.query('select * from warehouses where id = ?', [warehouseId]);
}

const create = ({ name, address }) => {
    return db.query('insert into warehouses (name, address) values (  ?, ?)', [name, address]);
}

const update = (warehouseId, { name, address }) => {
    return db.query('update warehouses set name= ?, address= ? where id = ?', [name, address, warehouseId]);
}

const deleteById = (warehouseId) => {
    return db.query('delete from warehouses where id = ?', [warehouseId]);
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}