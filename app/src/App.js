import React from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import Counter from './Components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter Total="10232400" Revenue="200000000" Depense="20000"/>
      <Form />
      <Table />
    </div>
  );
}

export default App;