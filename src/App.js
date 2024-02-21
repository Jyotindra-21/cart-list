import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Button variant="contained" onClick={decrement}>
              <RemoveCircleOutlineIcon />
            </Button>
            <h1>{count}</h1>
            <Button variant="contained" onClick={increment}>
              <AddCircleOutlineIcon />
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="todoList">
            <h1 style={{textAlign:"center"}}>TODO LIST</h1>
            <ul>
              {todos.length === 0 && <h1>Loading...</h1>}
              {todos.length > 0 &&
                todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
