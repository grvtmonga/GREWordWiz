const { Signup } = require("../controllers/userController");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;