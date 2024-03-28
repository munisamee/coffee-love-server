const router = require("express").Router();
// Base route ("/api"):
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/user", require("./user.routes"));
router.use("/order", require("./order.routes"));
router.use("/product", require("./product.routes"));
router.use("/upload", require("./upload.routes"));

module.exports = router;