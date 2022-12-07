import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { text: "Todo 1", isEditing: false },
    { text: "Todo 2", isEditing: false },
    { text: "Todo 3", isEditing: false },
  ]);

  const onEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const onSave = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index].text = newValue;
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const onDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onAddTodo = () => {
    const newTodos = [...todos];
    newTodos.unshift({ text: "new TODO", isEditing: true });
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app_title">TODO app</h1>

        <Button type="add" onClick={onAddTodo}>
          Add TODO
        </Button>
      </header>
      <main className="app__main">
        {todos.map((todo, index) => (
          <Todo
            key={`${todo}-${index}`}
            index={index}
            todo={todo}
            onEdit={onEdit}
            onSave={onSave}
            onDelete={onDelete}
          />
        ))}

        {todos.length === 0 && (
          <p>
            Whoop Whoop! No todos left. Click 'Add TODO' in the top right corner
            of the screen to start adding todos again.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
