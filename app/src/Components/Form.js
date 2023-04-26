import React, { useState } from 'react';
import EditableSelect from './EditableSelect';
import { SimpleSelect } from './EditableSelect';
import Button from './Button';
import BasicTextField from './InputField';

export default function Form() {
  const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
      setShowForm(!showForm);
    };

  return (
    <div>
      <button onClick={toggleForm}>{showForm ? "HIDE FORM" : "ADD A DEP/REV"}</button>
      {showForm && (
        <div id="container-form">
          <EditableSelect />
          <SimpleSelect />
          <BasicTextField type="date" />
          <BasicTextField name="Motif" type="text" />
          <BasicTextField name="Price" type="number" />
          <Button id="btn-form" type="button" ButtonName="ADD" />
        </div>
      )}
    </div>
  );
}
