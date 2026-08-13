import React, { useId, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputField, setInputField] = useState("");
  const uniqueId = useId();
  const handleChange = () => {
    setTodos((todos) => {
      todos.concat({
        text: inputField,
        id: uniqueId,
      });
    });
    setInputField("");
  };

  const removeTodo = (id) => {
    
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter new Todo"
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        />
        <button onClick={handleChange}>Submit</button>
      </form>
      <section>
        <ul>
          {todos.map(({ text, id }) => (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => removeTodo(id)}>X</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Todo;
