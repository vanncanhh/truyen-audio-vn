const db = require("../config/database.config");

const KieuTruyen = {
  getAll: async () => {
    const [rows] = await db.query("select * from KieuTruyen");
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM KieuTruyen WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  create: async (data) => {
    const { TenKieuTruyen } = data;

    const [result] = await db.query(
      `INSERT INTO KieuTruyen 
          (TenKieuTruyen)
          VALUES (?)`,
      [TenKieuTruyen]
    );

    return result.insertId;
  },

  update: async (id, data) => {
    const [result] = await db.query("UPDATE KieuTruyen SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await db.query("DELETE FROM KieuTruyen WHERE id = ?", [
      id,
    ]);
    return result.affectedRows;
  },
};

module.exports = KieuTruyen;
