import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Renders app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/TODO app/i);
  expect(titleElement).toBeInTheDocument();
});

test("Adds new Todo", () => {
  render(<App />);
  const addTodo = screen.getByTestId("btn-add-todo");

  fireEvent.click(addTodo);

  const newTodoInputElement = screen.getByTestId("new TODO");
  expect(newTodoInputElement).toBeInTheDocument();
});

test("Deletes a Todo", () => {
  render(<App initialTodos={[{ text: "initial Todo", isEditing: false }]} />);
  const deleteTodo = screen.getByTestId("btn-delete-todo");

  fireEvent.click(deleteTodo);

  const noTodosLeftElement = screen.getByText(/Whoop Whoop! No todos left. Click 'Add TODO' in the top right corner of the screen to start adding todos again./i);
  expect(noTodosLeftElement).toBeInTheDocument();
});

test("Edits and saves a Todo", () => {
  render(<App initialTodos={[{ text: "initial Todo", isEditing: false }]} />);
  const editTodo = screen.getByTestId("btn-edit-todo");

  fireEvent.click(editTodo);

  const editTodoInputElement = screen.getByTestId("initial Todo");
  expect(editTodoInputElement).toBeInTheDocument();

  editTodoInputElement.value = 'edited initial Todo'
  const saveTodo = screen.getByTestId("btn-save-todo");
  fireEvent.click(saveTodo);

  const editedTodoElement = screen.getByText("edited initial Todo");
  expect(editedTodoElement).toBeInTheDocument();

});