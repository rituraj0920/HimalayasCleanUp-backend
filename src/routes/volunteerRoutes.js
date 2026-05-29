const express = require("express");

const router = express.Router();

const authController = require("../controllers/volunteerController");




router.post("/volunteer/register",authController.registerVolunteer);

module.exports = router;