const express = require("express");
const KieuTruyenController = require("../controllers/kieuTruyen.controller");
const router = express.Router();

router.get("/", KieuTruyenController.getAll);

module.exports = router;
