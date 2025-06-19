const router = require("express").Router();
const controller = require("./movies.controller");

router.route("/:movieId/theaters").get(controller.listTheaters);
router.route("/:movieId/reviews").get(controller.listReviews);
router.route("/:movieId").get(controller.read);
router.route("/").get(controller.list);

module.exports = router;
