exports.up = function(knex) {
  return knex.schema.createTable("theaters", (table) => {
    table.increments("theater_id").primary();   // Auto-increment ID
    table.string("name");                       // Theater name
    table.string("address_line_1");             // Street address
    table.string("address_line_2");             // Optional
    table.string("city");
    table.string("state");
    table.string("zip");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("theaters");
};
