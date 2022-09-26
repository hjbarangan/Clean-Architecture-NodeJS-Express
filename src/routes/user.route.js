const router = require("express").Router();

const {
  postUserController,
  putUserController,
  softDeleteUserController,
  getAllUsersController,
  loginUserController,
  changeUserPasswordController,
  getUserByIdController
} = require("../controllers/user/index");
const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post("/register", makeExpressCallback(postUserController));
router.post("/login", makeExpressCallback(loginUserController));
router.get("/user-details/:id", makeExpressCallback(getUserByIdController));
router.patch("/user/pass/:id", makeExpressCallback(changeUserPasswordController));
router.put("/user/edit/:id", makeExpressCallback(putUserController));
router.get("/users", makeExpressCallback(getAllUsersController));
router.patch(
  "/user/delete/:id",
 
  makeExpressCallback(softDeleteUserController)
);

module.exports = router;
