const db = require("../data/db-config");

module.exports = {
  get,
  getByID,
  insert,
  update,
  remove,
};

function get() {
  return db("cars");
}

function getByID(id) {
  return db("cars").where({ id }).first();
}

function insert(post) {
  return db("cars")
    .insert(post)
    .then((newWhip) => {
      return getByID(newWhip[0]);
    });
}

function update(id, changes) {
  return db("cars").where({ id }).update(changes);
}

function remove(id) {
  return db("cars").where({ id }).del();
}
