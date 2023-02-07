import React, { useState } from 'react';
import { Button } from "@mui/material";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button className="bouton1" variant="contained" type="submit">Ajouter</Button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button className="bouton1" variant="contained" type="button" onClick={() => handleDelete(index)}>
              Supprimer
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
