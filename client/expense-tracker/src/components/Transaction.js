import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Transaction = () => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (values) => {
    createTransaction(values);
  };

  const createTransaction = async (payload) => {
    let category = "";
    const numType = Math.sign(Number(payload.amount));
    if (numType === 1) {
      category = "income";
    } else if (numType === -1) {
      category = "expense";
    }
    try {
      const response = await axios.post(`http://localhost:3000/transactions`, {
        name: payload.name,
        category: category,
        amount: payload.amount,
      });
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="income">Name</label>
        <input type="text" name="amount" ref={register()} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" ref={register()} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Transaction;
