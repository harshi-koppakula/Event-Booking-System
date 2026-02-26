const router = require("express").Router();
const { register, login } = require("../../../client/src/config/controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);

module.exports = router;