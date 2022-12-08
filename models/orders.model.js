const getAll = () => {
    return debug.query('select * from orders')
}


module.export = {
    getAll
}