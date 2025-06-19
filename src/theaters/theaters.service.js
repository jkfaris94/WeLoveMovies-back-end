const knex = require("../db/connection");

function list() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select(
      "t.*",
      "m.movie_id as m_movie_id",
      "m.title as m_title",
      "m.runtime_in_minutes as m_runtime_in_minutes",
      "m.rating as m_rating",
      "m.description as m_description",
      "m.image_url as m_image_url",
      "mt.is_showing as m_is_showing"
    )
    .then((rows) => {
      const theatersMap = {};

      rows.forEach((row) => {
        if (!theatersMap[row.theater_id]) {
          theatersMap[row.theater_id] = {
            theater_id: row.theater_id,
            name: row.name,
            address_line_1: row.address_line_1,
            address_line_2: row.address_line_2,
            city: row.city,
            state: row.state,
            zip: row.zip,
            movies: [],
          };
        }

        theatersMap[row.theater_id].movies.push({
          movie_id: row.m_movie_id,
          title: row.m_title,
          runtime_in_minutes: row.m_runtime_in_minutes,
          rating: row.m_rating,
          description: row.m_description,
          image_url: row.m_image_url,
          is_showing: row.m_is_showing,
        });
      });

      return Object.values(theatersMap);
    });
}

module.exports = {
  list,
};