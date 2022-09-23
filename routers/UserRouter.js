/**
 * @Author: Your name
 * @Date:   2022-09-23 20:41:38
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-09-23 20:45:15
 */
let express = require("express");
let router = express.Router();
let UserController = require("../controller/UserControl");

router.get("/user", UserController.all);
router.post("/user/create", UserController.create);
router.put("/user/update", UserController.update);
router.delete("/user/delete", UserController.delete);

module.exports = router;