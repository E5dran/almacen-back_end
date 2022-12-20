const getAll = () => {
    return db.query('select * from orders');
}

const getById = (ordersId) => {
    return db.query('select * from orders where id = ?', [ordersId]);
}

const create = ({ addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, warehouse_id, user_id, destination_wh_id }) => {
    return db.query('insert into orders (addressee, description, n_items, destination_address,  departure_date, arrival_date, truck_plate, warehouse_id, user_id, destination_wh_id) values (  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, warehouse_id, user_id, destination_wh_id]);
}

const update = (ordersId, { addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate }) => {
    return db.query('update orders set addressee= ?, description= ?, n_items= ?, destination_address= ?,  departure_date= ?, arrival_date= ?, truck_plate= ? where id = ?', [addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, ordersId]);
}

const deleteById = (ordersId) => {
    return db.query('delete from orders where id = ?', [ordersId]);
}

const getByWarehouseId = (warehouseId) => {
    return db.query('select * from orders where warehouse_id = ?', [warehouseId]);
}

const getByWarehouseIdStatus = (warehouseId, status) => {
    return db.query('select * from orders where warehouse_id = ? && status = ?', [warehouseId, status]);
}

const getByWarehouseIdStatusCat = (warehouseId, status, cat) => {
    return db.query('select * from orders where warehouse_id = ? && status = ? && category = ?', [warehouseId, status, cat]);
}

const updateStatus = (ordersId, category) => {
    return db.query('update orders set category = ? where id = ?', [category, ordersId]);
}

const updateDepartureDate = (ordersId, date) => {
    return db.query('update orders set departure_date = ? where id = ?', [date, ordersId]);
}

const updateArrivalDate = (ordersId, date) => {
    return db.query('update orders set arrival_date = ? where id = ?', [date, ordersId]);
}

const updateWarehouseId = (ordersId, warehouseId) => {
    return db.query('update orders set warehouse_id = ? where id = ?', [warehouseId, ordersId]);
}

const getByAdressee = (addressee) => {
    return db.query('select * from orders where addressee = ?', [addressee]);
}

module.exports = {
    getAll, create, update, deleteById, getById, getByWarehouseId, getByWarehouseIdStatus, getByWarehouseIdStatusCat, updateStatus, updateDepartureDate, updateArrivalDate, getByAdressee, updateWarehouseId
}