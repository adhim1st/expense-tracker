import React from "react";
import TransactionCard from "./TransactionCard";

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h1>History</h1>
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
