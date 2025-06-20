const router = require("express").Router();
const controller = require("./theaters.controller");

router
    .route("/")
    .get(controller.list)
    .all((req, res, next) => next({ status: 405, error: "Method not allowed" }));

module.exports = router;