import React from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../store/actions/transactionAction";

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTransaction(id));
  };

  return (
    <div>
      <p>{transaction.name}</p>
      <p>{transaction.amount}</p>
      {JSON.stringify(transaction)}
      <button
        type="button"
        onClick={() => {
          handleDelete(transaction._id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TransactionCard;
