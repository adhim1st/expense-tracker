import axios from "axios";

const setTransactions = (payload) => {
  return {
    type: "transactions/setTransactions",
    payload: payload,
  };
};

const setBalance = (payload) => {
  return {
    type: "balance/setBalance",
    payload: payload,
  };
};

const setIncome = (payload) => {
  return {
    type: "income/setIncome",
    payload: payload,
  };
};

const setExpense = (payload) => {
  return {
    type: "expense/setExpense",
    payload: payload,
  };
};

export const getTransaction = () => {
  return (dispatch, getState) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/transactions",
    })
      .then(({ data }) => {
        dispatch(setTransactions(data));
        const balance = calculateBalance(data);
        dispatch(setBalance(balance));
        const income = calculateIncome(data);
        dispatch(setIncome(income));
        const expense = calculateExpense(data);
        dispatch(setExpense(expense));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addTransaction = (payload) => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/transactions",
      data: payload,
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(getTransaction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeTransaction = (id) => {
  return (dispatch, getState) => {
    axios({
      method: "DELETE",
      url: `http://localhost:3000/transactions/${id}`,
    })
      .then((response) => {
        console.log(response);
        dispatch(getTransaction());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const calculateBalance = (payload) => {
  if (payload.length > 0) {
    let tempBalance = 0;
    payload.map((e) => {
      tempBalance += e.amount;
    });
    console.log(tempBalance);
    return tempBalance;
  }
};

const calculateIncome = (payload) => {
  if (payload.length > 0) {
    let tempIncome = 0;
    payload.map((e) => {
      if (e.category === "income") {
        tempIncome += e.amount;
      }
    });
    return tempIncome;
  }
};

const calculateExpense = (payload) => {
  if (payload.length > 0) {
    let tempExpense = 0;
    payload.map((e) => {
      if (e.category == "expense") {
        tempExpense += e.amount;
      }
    });

    return tempExpense;
  }
};
