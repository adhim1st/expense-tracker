import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Balance from "../components/Balance";
import TransactionHistory from "../components/TransactionHistory";
import Transaction from "../components/Transaction";
import { getTransaction } from "../store/actions/transactionAction";

const Home = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state) => state.transactionReducer.transactions
  );
  const balance = useSelector((state) => state.transactionReducer.balance);
  const income = useSelector((state) => state.transactionReducer.income);
  const expense = useSelector((state) => state.transactionReducer.expense);

  useEffect(() => {
    dispatch(getTransaction());
  }, []);

  return (
    <div className="container">
      <div className="content">
        <Balance balance={balance} income={income} expense={expense} />
      </div>
      <div className="content">
        <Transaction />
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
