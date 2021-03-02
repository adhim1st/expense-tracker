import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction History</h3>
      {transactions &&
        transactions.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
          );
        })}
    </div>
  );
};

export default TransactionHistory;
