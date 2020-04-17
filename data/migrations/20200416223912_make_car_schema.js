exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.text("Make", 128).notNullable();
    table.text("Model", 128).notNullable();
    table.integer("VIN_Num", 17).unique().notNullable();
    table.integer("Mileage", 6).notNullable();
    table.boolean("AutomaticTransmission").defaultTo(false);
    table.text("TitleStatus").defaultTo("Clean");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
