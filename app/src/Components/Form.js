import * as React from 'react';
import Button from '@mui/material/Button';

export default function AddButton() {
  return (
      <Button variant="contained" color="success">
        Add a Depense / Revenue
      </Button>
  );
}


export function Select() {
  // const js =  () => "this.nextElementSibling.value=this.value";
    return (
<div className="select-editable">
  <select onChange={this.nextElementSibling.value = this.value}>
    <option value="" />
    <option value="115x175 mm">115x175 mm</option>
    <option value="120x160 mm">120x160 mm</option>
    <option value="120x287 mm">120x287 mm</option>
  </select>
  <input type="text" id='test' name="format" defaultValue="" />
</div>

    );
  }
