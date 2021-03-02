import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTransaction } from "../store/actions/transactionAction";
import "./Transaction.css";

const Transaction = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (values) => {
    createTransaction(values);
    reset();
  };

  const createTransaction = (payload) => {
    let category = "";
    const numType = Math.sign(Number(payload.amount));
    if (numType === 1) {
      category = "income";
    } else if (numType === -1) {
      category = "expense";
    }
    dispatch(
      addTransaction({
        name: payload.name,
        category: category,
        amount: Number(payload.amount),
      })
    );
  };

  return (
    <div className="transaction-container">
      <h3>Create Transaction</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="salary"
              ref={register({ required: "Name required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="100"
              ref={register({ required: "Amount required" })}
            />
            {errors.amount && <span>{errors.amount.message}</span>}
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
