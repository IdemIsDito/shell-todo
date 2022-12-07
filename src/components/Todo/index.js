import { useRef } from "react";
import Button from "../Button";
import "./todo.css";

function Todo({ index, todo, onEdit, onDelete, onSave }) {
  const todoRef = useRef(null);
  const saveTodo = () => onSave(index, todoRef.current.value);

  return (
    <article className="todo__row">
      {todo.isEditing && (
        <>
          <input className="todo__input" ref={todoRef} defaultValue={todo.text} />
          <Button type="save" onClick={saveTodo}>
            Save
          </Button>
        </>
      )}
      {!todo.isEditing && (
        <>
          <p className="todo__description">{todo.text}</p>
          <Button type="edit" onClick={() => onEdit(index)}>
            Edit
          </Button>
          <Button type="delete" onClick={() => onDelete(index)}>
            Delete
          </Button>
        </>
      )}
    </article>
  );
}

export default Todo;
