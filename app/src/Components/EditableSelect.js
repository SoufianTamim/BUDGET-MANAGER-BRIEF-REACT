import React from "react";

export default function EditableSelect() {
  const options = [
    { value: "", label: "<-- Select a category  -->" },
    { value: "Invoice", label: "Invoice" },
    { value: "Housing", label: "Housing" },
    { value: "Savings", label: "Savings" },
    { value: "Shopping", label: "Shopping" },
    { value: "Health care", label: "Health care" },
    { value: "Transportation", label: "Transportation" },
    { value: "Debt repayment", label: "Debt repayment" },
    { value: "Entertainment", label: "Entertainment" },
  ];

  return (
    <>
      <div className="select-editable">
        <select onChange={(event) => (event.target.nextElementSibling.value = event.target.value)} id="select-cat">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input type="text" name="format" defaultValue="" id="select-cat1" placeholder=" Select a Category or type it here" />
      </div>
    </>
  );
}

export function SimpleSelect() {
  return (
    <select id="Type">
      <option selected disabled key="type" value=""> {"<-- Select a Type -->"} </option>
      <option key="Revenue" value="Revenue">  Revenue </option>
      <option key="Depense" value="Depense">  Depense </option>
    </select>
  );
}
