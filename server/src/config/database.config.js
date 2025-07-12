const mysql = require("mysql2");
require("dotenv").config();

//Khai báo các thông tin kết nối

const connection = mysql.createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
});

module.exports = connection.promise();

async function testConnection() {
  try {
    const [rows, fields] = await connection.promise().query("SELECT 1");
    console.log("Kết nối MySQL thành công", rows);
  } catch (err) {
    console.error("Lỗi kết nối MySQL:", err.stack);
  }
}
testConnection();
