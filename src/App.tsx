import React from 'react';
import TodoList from './TodoList';
import './App.css';
const App: React.FC = () => {
  return (
      <div>
        <h1>Todo List with Pagination</h1>
        <TodoList />
      </div>
  );
};

export default App;