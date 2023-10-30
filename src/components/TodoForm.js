import React, { useState } from 'react';
import './TodoForm.css'

function TodoForm({addName}) {
    const [name, setName] = useState('');
  
    const handleChange = (event) => {
      setName(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addName(name);
      setName('');
    }

  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter your todo" />
                <button type="submit">Submit</button>
            </form>
        </div>
      
    );
  }

export default TodoForm;
  