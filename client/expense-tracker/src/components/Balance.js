import React from "react";
import "./Balance.css";

const Balance = ({ balance, income, expense }) => {
  return (
    <div>
      <div>
        <h1>Balance</h1>
        {balance && <p className="money">{balance}</p>}
      </div>
      <div>
        <h2>Income</h2>
        {income && <p className="money">{income}</p>}
        <h2>Expense</h2>
        {expense && <p className="money">{expense}</p>}
      </div>
    </div>
  );
};

export default Balance;
