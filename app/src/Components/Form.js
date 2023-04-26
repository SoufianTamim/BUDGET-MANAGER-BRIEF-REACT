import React, { useState } from 'react';
import EditableSelect from './EditableSelect';
import { SimpleSelect } from './EditableSelect';
import Button from './Button';
import BasicTextFields from './InputField';

export default function Form() {
  const [showForm, setShowForm] = useState(true);
  
    const toggleForm = () => {
      console.log("toggle found")
      setShowForm(!showForm);
    };

  return (
    <div>
      <Button  ButtonName="ShowForm" onclick={toggleForm} />
      {showForm && (
        <div id="container-form">
          <EditableSelect />
          <SimpleSelect />
          <BasicTextFields name="Date" type="date" />
          <BasicTextFields name="Motif" type="text" />
          <BasicTextFields name="Price" type="number" />
          <Button type="button" ButtonName="ADD" />
        </div>
      )}
    </div>
  );
}
