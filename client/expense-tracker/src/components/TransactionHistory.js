import React from "react";

const TransactionHistory = ({ transactions }) => {
  return <div>{JSON.stringify(transactions)}</div>;
};

export default TransactionHistory;
