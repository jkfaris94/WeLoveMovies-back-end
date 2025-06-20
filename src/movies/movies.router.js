const router = require("express").Router();
const controller = require("./movies.controller");

router
    .route("/:movieId/theaters")
    .get(controller.listTheaters)
    .all((req, res, next) => next({ status: 405, error: "Method not allowed" }));

router
    .route("/:movieId/reviews")
    .get(controller.listReviews)
    .all((req, res, next) => next({ status: 405, error: "Method not allowed" }));

router
    .route("/:movieId")
    .get(controller.read)
    .all((req, res, next) => next({ status: 405, error: "Method not allowed" }));

router
    .route("/")
    .get(controller.list)
    .all((req, res, next) => next({ status: 405, error: "Method not allowed" }));

module.exports = router;
