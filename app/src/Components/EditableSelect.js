import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from './Button';



export default function EditableSelect() {
  const [options, setOptions] = useState([
    { value: '', label: '<-- Select a Category -->' },
    { value: 'Invoice', label: 'Invoice' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Savings', label: 'Savings' },
    { value: 'Shopping', label: 'Shopping' },
    { value: 'Health care', label: 'Health care' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'Debt repayment', label: 'Debt repayment' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'other', label: 'Other' }
  ]);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [editingOther, setEditingOther] = useState(false);
  const [newOptionValue, setNewOptionValue] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;

    if (value === 'other') {
      setEditingOther(true);
      setNewOptionValue('');
    } else {
      setSelectedOption(options.find(option => option.value === value));
      setEditingOther(false);
    }
  };

  const handleNewOptionChange = (event) => {
    setNewOptionValue(event.target.value);
  };

  const handleNewOptionSubmit = (event) => {
    event.preventDefault();
    if (newOptionValue) {
      const newOptionObj = { value: newOptionValue, label: newOptionValue };
      setOptions([...options, newOptionObj]);
      setSelectedOption(newOptionObj);
      setEditingOther(false);
      localStorage.setItem('options', JSON.stringify([...options, newOptionObj]));
    }
  };
  

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('options'));
    if (storedOptions) {
      setOptions(storedOptions);
    }
  }, []);

  return (
    <Box>
      <div onSubmit={handleNewOptionSubmit}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select labelId="demo-simple-select-label"
           label="Category" id="demo-simple-select" 
           value={selectedOption.value} onChange={handleSelectChange}>
            {options.map(option => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {editingOther && (
          <div id="grp-select">
            <TextField id="select-edit" type="text" value={newOptionValue} onChange={handleNewOptionChange} />
            <Button type="submit" ButtonName="ADD"/>
          </div>
        )}
      </div>
    </Box>
  );
}

  export function SimpleSelect(){
    return (
      <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select labelId="demo-simple-select-label" label="Type" id="demo-simple-select" >
                <MenuItem key="Revenue" value="Revenue">Revenue</MenuItem>
                <MenuItem key="Depense" value="Depense">Depense</MenuItem>
            </Select>
          </FormControl>
      </Box>
    );
  }
