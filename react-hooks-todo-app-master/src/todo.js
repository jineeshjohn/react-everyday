import React, { useState } from "react";

import "./styles.css";

const useInputState = () => {
  const [value, setValue] = useState("");

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => setValue("")
  };
};

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <input
        type="text"
        placeholder="Add todo"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

const useTodoState = initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
};

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index.toString()} dense button>
        <input type="checkbox" tabIndex={-1} />
        <span>{todo}</span>
        <button
          aria-label="Delete"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const TodoApp = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <h1 component="h1" variant="h2">
        Todos
      </h1>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
export default TodoApp;
