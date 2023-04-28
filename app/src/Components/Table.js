import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function BasicTable({formData}) {

  function getRowStyle(type) {
    return {
      color: type === "Revenue" ? "green" : "red"

    };
  }

  return (
    <TableContainer component={Paper} id="Table-Container">
      <h1 > YOUR OPERATIONS </h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Motif</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
          {formData.map((formData,index) => (
            <TableRow  key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell style={getRowStyle(formData.type)} >{formData.category}</TableCell>
              <TableCell style={getRowStyle(formData.type)} >{formData.type}</TableCell>
              <TableCell style={getRowStyle(formData.type)} >{formData.date}</TableCell>
              <TableCell style={getRowStyle(formData.type)} >{formData.motif}</TableCell>
              <TableCell style={getRowStyle(formData.type)} >{formData.price}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
