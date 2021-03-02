const router = require("express").Router();
const routeTransactions = require("./transactions");

router.use("/transactions", routeTransactions);

module.exports = router;
