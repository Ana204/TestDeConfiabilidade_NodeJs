const routes = require("express").Router();

const AuthenticationController = require("./controller/authenticationController")

routes.post("/authentication", AuthenticationController.store)

module.exports = routes;