const router = require("express").Router();

const { postUserController, getAllUsersController } = require("../controllers/user/index");

const makeExpressCallback = require("../express-callback/index");

router.post("/register", makeExpressCallback(postUserController));
// router.post("/login", makeExpressCallback(loginUserController));
// router.get("/user-details", makeExpressCallback(userDetailsController));
// router.put("/user/edit/:id", makeExpressCallback(putUserController))
router.get("/users", makeExpressCallback(getAllUsersController));


module.exports = router;
