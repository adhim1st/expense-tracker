import React from "react";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../store/actions/transactionAction";
import "./TransactionCard.css";
import { MdDelete } from "react-icons/md";

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeTransaction(id));
  };

  return (
    <li
      className={transaction.category === "income" ? "list plus" : "list minus"}
    >
      <span>{transaction.name}</span>
      <span>
        {transaction.category === "income" ? "+" : ""}
        {transaction.amount}
      </span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => {
          handleDelete(transaction._id);
        }}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default TransactionCard;
