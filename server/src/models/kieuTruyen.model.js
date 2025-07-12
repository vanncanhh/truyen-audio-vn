const db = require("../config/database.config");

const KieuTruyen = {
  getAll: async () => {
    const [rows] = await db.query("select * from KieuTruyen");
    return rows;
  },
};

module.exports = KieuTruyen;
