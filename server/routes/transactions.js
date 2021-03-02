const router = require("express").Router();
const TransactionController = require("../controllers/transaction-controller");

router.get("/", TransactionController.findAllTransaction);
router.post("/", TransactionController.createTransaction);
router.delete("/:id", TransactionController.removeTransaction);
module.exports = router;
