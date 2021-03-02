import React, { useState, useEffect } from "react";
import Balance from "../components/Balance";
import Header from "../components/Header";
import axios from "axios";
import TransactionHistory from "../components/TransactionHistory";
import Transaction from "../components/Transaction";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    calculateBalance();
    calculateIncome();
    calculateExpense();
  }, [transactions]);

  const getTransactions = async () => {
    const response = await axios.get(`http://localhost:3000/transactions`);
    setTransactions(response.data);
  };

  const calculateBalance = () => {
    if (transactions.length > 0) {
      let tempBalance = 0;
      transactions.map((e) => {
        if (e.category === "income") {
          tempBalance += e.amount;
        } else if (e.category == "expense") {
          tempBalance -= e.amount;
        }
      });
      setBalance(tempBalance);
    }
  };

  const calculateIncome = () => {
    if (transactions.length > 0) {
      let tempIncome = 0;
      transactions.map((e) => {
        if (e.category === "income") {
          tempIncome += e.amount;
        }
      });
      setIncome(tempIncome);
    }
  };

  const calculateExpense = () => {
    if (transactions.length > 0) {
      let tempExpense = 0;
      transactions.map((e) => {
        if (e.category == "expense") {
          tempExpense += e.amount;
        }
      });

      setExpense(tempExpense);
    }
  };

  return (
    <div className="container">
      <div className="balance">
        <Balance balance={balance} income={income} expense={expense} />
      </div>
      <div className="transaction">
        <Transaction onChange={getTransactions} />
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
