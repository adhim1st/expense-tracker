const initialState = {
  transactions: [],
  balance: 0,
  income: 0,
  expense: 0,
};

export default function banknoteReducer(state = initialState, action) {
  switch (action.type) {
    case "transactions/setTransactions":
      return { ...state, transactions: action.payload };
    case "balance/setBalance":
      return { ...state, balance: action.payload };
    case "income/setIncome":
      return { ...state, income: action.payload };
    case "expense/setExpense":
      return { ...state, expense: action.payload };
    default:
      return state;
  }
}
