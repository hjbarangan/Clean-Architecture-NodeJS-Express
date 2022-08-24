const router = require("express").Router();

const { postUserController } = require("../controllers/user/index");

const makeExpressCallback = require("../express-callback/index");

router.post("/register", makeExpressCallback(postUserController));

module.exports = router;
