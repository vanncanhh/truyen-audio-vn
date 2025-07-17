const KieuTruyen = require("../models/kieuTruyen.model");

const KieuTruyenService = {
  getAllKieuTruyen: async () => {
    return await KieuTruyen.getAll();
  },

  getByIdKieuTruyen: async (id) => {
    const kieuTruyen = await KieuTruyen.getById(id);
    if (!kieuTruyen) throw new Error("Kieu truyen not found");
    return kieuTruyen;
  },

  createKieuTruyen: async (data) => {
    if (!data.TenKieuTruyen) throw new Error("Ten Kieu Truyen is required");
    return await KieuTruyen.create(data);
  },
};

module.exports = KieuTruyenService;
