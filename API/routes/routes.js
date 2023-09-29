const express = require("express");
const routes = express.Router();
const { data } = require("../controller/control");

routes.route("/api/v1/data").get(data);

module.exports = routes;
