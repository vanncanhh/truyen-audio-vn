const kieuTruyen = require("./kieuTruyen.router");

const router = (app) => {
  app.use("api/kieuTruyen", kieuTruyen);
};

module.exports = router;
