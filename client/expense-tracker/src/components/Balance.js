import React from "react";
import "./Balance.css";

const Balance = ({ balance, income, expense }) => {
  return (
    <div>
      <h3>Budget App</h3>
      <div className="balance">
        <h4>Balance</h4>
        {balance && <h1 className="money">{balance}</h1>}
      </div>
      <div className="income-expense">
        <div className="income">
          <h4>Income</h4>
          {income && <h1 className="money plus">{income}</h1>}
        </div>
        <div className="expense">
          <h4>Expense</h4>
          {expense && <h1 className="money minus">{expense}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Balance;
