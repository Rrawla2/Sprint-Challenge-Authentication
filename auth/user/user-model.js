const db = require("../data/dbConfig.js");


module.exports = {
    add,
    getAll,
    findBy,
    findById,
}

function add(user) {
    return db("users")
        .insert(user)
}

function findBy(username) {
    return db("users")
        .where(username)
}

function getAll() {
    return db('users')
}

function findById(id) {
    return db('users')
        .where({id})
        .first()
}