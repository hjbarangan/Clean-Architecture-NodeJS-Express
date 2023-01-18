const router = require("express").Router();

const {
  postUserRoleController,
  putUserRoleController,
  getUserRoleByIdController,
  getAllUserRoleController,
  softDeleteUserRoleController
} = require("../controllers/user_role/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/user_role/add", makeExpressCallback(postUserRoleController));
router.put("/user_role/edit/:id", authMiddleware, makeExpressCallback(putUserRoleController));
router.get("/user_role/view/:id", authMiddleware, makeExpressCallback(getUserRoleByIdController));
router.get("/user_role", makeExpressCallback(getAllUserRoleController));
router.patch("/user_role/delete/:id", authMiddleware, makeExpressCallback(softDeleteUserRoleController))

module.exports = router;
