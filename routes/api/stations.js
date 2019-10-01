const express = require("express");
const router = express.Router();
const controller = require("../../controllers/stations");

// @route   GET api/stations/:id
// @desc    Show station info
// @access  Public
router.get("/:id", controller.details);

// @route   POST api/stations/add
// @desc    Adding radio station
// @access  Privat
router.post("/add", controller.create);

// @route   UPDATE api/stations/:id/edit
// @desc    Adding radio station
// @access  Privat
router.put("/:id/edit", controller.update);

// @route   DELETE api/stations/remove/:id
// @desc    Adding radio station
// @access  Privat
router.delete("/:id/delete", controller.delete);

module.exports = router;
