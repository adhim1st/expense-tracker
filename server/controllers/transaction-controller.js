const Transaction = require("../models/transaction-model");

class TransactionController {
  static async createTransaction(req, res, next) {
    try {
      if (req.body.name === "") {
        throw {
          status: 400,
          message: "Name Required",
        };
      } else {
        const data = await Transaction.createOne({
          name: req.body.name,
          category: req.body.category,
          amount: Number(req.body.amount),
        });
        res.status(201).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  static async findAllTransaction(req, res, next) {
    try {
      const data = await Transaction.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async removeTransaction(req, res) {
    try {
      if (!Number(req.params.id)) {
        const data = await Transaction.removeOne(req.params.id);
        res.status(200).json({ message: "Transaction Successfuly Deleted" });
      } else {
        throw {
          status: 404,
          message: "Error Not Found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TransactionController;
