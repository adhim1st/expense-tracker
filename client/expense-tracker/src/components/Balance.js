import React from "react";

const Balance = ({ balance, income, expense }) => {
  return (
    <div>
      <div>
        <h1>Balance</h1>
        <p className="money">{balance}</p>
      </div>
      <div>
        <h2>Income</h2>
        <p className="money">{income}</p>
        <h2>Expense</h2>
        <p className="money">{expense}</p>
      </div>
    </div>
  );
};

export default Balance;
