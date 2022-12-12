const getAll = () => {
    return db.query('select * from orders')
}

const getById = (ordersId) => {
    return db.query('select * from orders where id = ?', [ordersId]);
}

const create = ({ addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, category }) => {
    return db.query('insert into orders (addressee, description, n_items, destination_address,  departure_date, arrival_date, truck_plate,category) values (  ?, ?, ?, ?, ?, ?, ?, ?)', [addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, category]);
}

const update = (ordersId, { addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, category }) => {
    return db.query('update orders set addressee= ?, description= ?, n_items= ?, destination_address= ?,  departure_date= ?, arrival_date= ?, truck_plate= ?, category= ? where id = ?', [addressee, description, n_items, destination_address, departure_date, arrival_date, truck_plate, category, ordersId])

}
//Este borra por ID ver si está bien
const deleteById = (ordersId) => {
    return db.query('delete from orders where id = ?', [ordersId]);
}


module.exports = {
    getAll, create, update, deleteById, getById
}