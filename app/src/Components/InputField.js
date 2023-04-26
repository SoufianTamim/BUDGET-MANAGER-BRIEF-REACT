import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField({name,type}) {
  return (
    <Box  component="form" sx={{  '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
      <TextField className='TextField' type={type} id="outlined-basic" label={name} variant="outlined" />
    </Box>
  );
}
