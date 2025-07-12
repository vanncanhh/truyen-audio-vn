const KieuTruyen = require("../models/kieuTruyen.model");

const KieuTruyenService = {
  getAllKieuTruyen: async () => {
    return await KieuTruyen.getAll();
  },
};

module.exports = KieuTruyenService;
