const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}

function listShowing() {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .where({ "mt.is_showing": true })
    .distinct("m.*");
}

function read(movieId) {
  return knex("movies")
    .select("*")
    .where({ movie_id: movieId })
    .first();
}

function listTheatersByMovie(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("t.*", "mt.is_showing")
    .where({ "mt.movie_id": movieId });
}

function listReviewsByMovie(movieId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select(
      "r.review_id",
      "r.content",
      "r.score",
      "r.critic_id",
      "r.movie_id",
      "c.critic_id as c_critic_id",
      "c.preferred_name as c_preferred_name",
      "c.surname as c_surname",
      "c.organization_name as c_organization_name"
    )
    .where({ "r.movie_id": movieId })
    .then((rows) =>
      rows.map((row) => {
        return {
          review_id: row.review_id,
          content: row.content,
          score: row.score,
          critic_id: row.critic_id,
          movie_id: row.movie_id,
          critic: {
            critic_id: row.c_critic_id,
            preferred_name: row.c_preferred_name,
            surname: row.c_surname,
            organization_name: row.c_organization_name,
          },
        };
      })
    );
}

module.exports = {
  list,
  listShowing,
  read,
  listTheatersByMovie,
  listReviewsByMovie,
};