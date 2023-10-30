import React, { useState } from 'react';
import NameForm from './components/TodoForm';
import NameList from './components/TodoList';
import './App.css';

function App() {
  const [listname, setListname] = useState(
    [
      'Homework 1 My First Project', 
      'Homework 2', 
      'Homework 3', 
      'Homework 4 : )'
    ]);

  const addName = (name) => {
    setListname([...listname, name]);
  }

  const deleteName = (index) => {
    const newList = listname.filter((_, i) => i !== index);
    setListname(newList);
  };

  return (
    <div>
      <h1>Welcome To TODO-PROJECT</h1>
      <NameForm  addName={addName} />
      <NameList listname={listname} deleteName={deleteName}/>
    </div>
  );
}

export default App;