const express = require("express");
const router = express.Router();
const controller = require("../Controllers/appcontroller");
router.post("/signup", controller.signup);
router.get("/registeredusers", controller.getRegisteredUsers);
router.post("/vote", controller.vote);
router.get("/getvotes", controller.getVotesCasted);
router.get("/recentregistrations", controller.getRecentRegistrations);
module.exports = router;
