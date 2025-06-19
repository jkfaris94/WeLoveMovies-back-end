exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary();          // Auto-increment ID
    table.text("content");                            // Review content
    table.integer("score");                           // Rating score

    table.integer("critic_id")                        // FK to critics
      .unsigned()
      .notNullable()
      .references("critic_id")
      .inTable("critics")
      .onDelete("CASCADE");

    table.integer("movie_id")                         // FK to movies
      .unsigned()
      .notNullable()
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("reviews");
};
