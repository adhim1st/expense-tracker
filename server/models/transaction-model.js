const { ObjectId } = require("mongodb");
const db = require("../config/mongo");
const Transaction = db.collection("transactions");

class TransactionModel {
  static createOne(payload) {
    return Transaction.insertOne(payload).then((data) => {
      return data.ops[0];
    });
  }

  static findAll() {
    return Transaction.find().toArray();
  }

  static removeOne(id) {
    return Transaction.findOneAndDelete({ _id: ObjectId(id) });
  }
}

module.exports = TransactionModel;
