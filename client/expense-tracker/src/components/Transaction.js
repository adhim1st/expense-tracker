import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTransaction } from "../store/actions/transactionAction";

const Transaction = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (values) => {
    createTransaction(values);
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" ref={register()} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" ref={register()} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Transaction;
