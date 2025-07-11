exports.up = function(knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.integer("movie_id")
      .unsigned()
      .notNullable()
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");

    table.integer("theater_id")
      .unsigned()
      .notNullable()
      .references("theater_id")
      .inTable("theaters")
      .onDelete("CASCADE");

    table.boolean("is_showing").defaultTo(false); // Indicates if movie is currently showing

    table.primary(["movie_id", "theater_id"]); // Composite primary key
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies_theaters");
};
