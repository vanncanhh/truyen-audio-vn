const { getAll } = require("../models/kieuTruyen.model");
const KieuTruyenService = require("../services/kieuTruyen.service");

const KieuTruyenController = {
  getAll: async (req, res) => {
    try {
      const data = await KieuTruyenService.getAllKieuTruyen();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = KieuTruyenController;
