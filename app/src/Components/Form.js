import React, { useState , useEffect } from 'react';
import EditableSelect from './EditableSelect';
import { SimpleSelect } from './EditableSelect';
import Button from './Button';
import BasicTextField from './InputField';
import Table from './Table';
import Counter from "./Counter";
import Chart from "./Chart";

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState([]);   

  const toggleForm = () => {
    setShowForm(!showForm);
  };

const [revenue, setRevenue] = useState(0);
const [expense, setExpense] = useState(0);

useEffect(() => {
  let totalRevenue = 0;
  let totalExpense = 0;

  formData.forEach((data) => {
    if (data.type === "Revenue") {
      totalRevenue += parseInt(data.price);
    } else if (data.type === "Depense") {
      totalExpense += parseInt(data.price);
    }
  });

  setRevenue(totalRevenue);
  setExpense(totalExpense);
}, [formData]);

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newFormData = {
    category: document.getElementById("select-cat1").value,
    type: document.getElementById("Type").value,
    date: document.getElementById("input-Date").value,
    motif: document.getElementById("input-Motif").value,
    price: document.getElementById("input-Price").value,
    value: 1,
  };
  setFormData([...formData, newFormData]);
  event.target.reset();
};

return (
  <div>
    <Counter Revenue={revenue} Depense={expense} />;
    <button onClick={toggleForm} id="btn">
      {showForm ? "HIDE FORM" : "ADD A DEP/REV"}
    </button>
    {showForm && (
      <form id="container-form" onSubmit={handleFormSubmit}>
        <EditableSelect />
        <SimpleSelect />
        <BasicTextField name="Date" type="date" />
        <BasicTextField name="Motif" type="text" />
        <BasicTextField name="Price" type="number" />
        <Button id="btn-form" type="submit" ButtonName="ADD" />
      </form>
    )}
    <Table formData={formData} setFormData={setFormData} />
    <Chart formData={formData} />
  </div>
);
}


