const service = require("./reviews.service");

async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await service.read(reviewId);

  if (review) {
    res.locals.review = review;
    return next();
  }

  next({ status: 404, error: `Review cannot be found.` });
}

async function update(req, res) {
  const updatedReview = {
    ...res.locals.review,
    ...req.body.data,
  };

  await service.update(updatedReview);
  const data = await service.readWithCritic(updatedReview.review_id);
  res.json({ data });
}

async function destroy(req, res) {
  await service.destroy(res.locals.review.review_id);
  res.sendStatus(204);
}

module.exports = {
  update: [reviewExists, update],
  delete: [reviewExists, destroy],
};
