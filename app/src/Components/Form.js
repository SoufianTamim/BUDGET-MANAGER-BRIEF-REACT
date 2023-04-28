import React, { useState } from 'react';
import EditableSelect from './EditableSelect';
import { SimpleSelect } from './EditableSelect';
import Button from './Button';
import BasicTextField from './InputField';
import Table from './Table';

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState([]);   

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      category: document.getElementById('select-cat1').value,
      type: document.getElementById('Type').value,
      date: document.getElementById('input-Date').value,
      motif: document.getElementById('input-Motif').value,
      price: document.getElementById('input-Price').value,
    };
    setFormData([...formData, newFormData]);
    event.target.reset();
  };

  return (
    <div>
      <button onClick={toggleForm} id="btn">{showForm ? "HIDE FORM" : "ADD A DEP/REV"}</button>
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
    </div>
  );
}
