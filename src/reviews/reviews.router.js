const router = require("express").Router();
const controller = require("./reviews.controller");

router
    .route("/:reviewId")
    .put(controller.update)
    .delete(controller.delete)
    .all((req, res, next) => next({ status: 405, error: "Method not allowed" }));

module.exports = router;
