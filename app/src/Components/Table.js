import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(category, type, date, motif, price) {
  return { category, type, date, motif, price};
}

const rows = [
  createData('na12345', 'haha', 'hoho', 'hihi','hoha' ),
  createData('na1234', 'haha', 'hoho', 'hihi','hoha' ),
  createData('na123', 'haha', 'hoho', 'hihi','hoha' ),
  createData('na12', 'haha', 'hoho', 'hihi','hoha' ),
  createData('na1', 'haha', 'hoho', 'hihi','hoha' ),
];

export default function BasicTable() {
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
          {rows.map((row) => (
            <TableRow  key={row.category} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.motif}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
