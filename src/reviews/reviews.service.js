const knex = require("../db/connection");

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

function update(updatedReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*");
}

function destroy(review_id) {
  return knex("reviews").where({ review_id }).del();
}

function readWithCritic(review_id) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select(
      "r.review_id",
      "r.content",
      "r.score",
      "r.critic_id",
      "r.movie_id",
      "r.created_at",
      "r.updated_at",
      "c.critic_id as critic.critic_id",
      "c.preferred_name as critic.preferred_name",
      "c.surname as critic.surname",
      "c.organization_name as critic.organization_name"
    )
    .where({ "r.review_id": review_id })
    .first()
    .then((row) => {
      if (!row) return null;

      return {
        review_id: row.review_id,
        content: row.content,
        score: row.score,
        critic_id: row.critic_id,
        movie_id: row.movie_id,
        created_at: row.created_at,
        updated_at: row.updated_at,
        critic: {
          critic_id: row["critic.critic_id"],
          preferred_name: row["critic.preferred_name"],
          surname: row["critic.surname"],
          organization_name: row["critic.organization_name"],
        },
      };
    });
}

module.exports = {
  read,
  update,
  destroy,
  readWithCritic,
};
